import { Prisma, User } from '@prisma/client';
import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';
import { hash } from 'argon2';
import moment from 'moment';
import { z } from 'zod';
import { prisma } from '../../../db/index';
import {
  activateUserSchema,
  registerUserSchema,
} from '../../schema/user.schema';
import { createRouter } from '../createRouter';
import { SendConfirmationEmail } from '../mailer';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */
const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  email: true,
  image: true,
  createdAt: false,
});

export const userRouter = createRouter()
  // create
  .mutation('register', {
    input: registerUserSchema,
    resolve: async ({ input, ctx }) => {
      const { name, email, password } = input;

      const exists = await ctx.prisma.user.findFirst({
        where: { email },
      });

      if (exists) {
        throw new trpc.TRPCError({
          code: 'CONFLICT',
          message: 'User already exists.',
        });
      }

      const hashedPassword = await hash(password);

      const user: User = await ctx.prisma.user.create({
        data: { name, email, password: hashedPassword },
      });

      await SendConfirmationEmail(user);

      return {
        status: 201,
        message: 'Account created successfully',
        result: user,
      };
    },
  })
  .query('activate', {
    input: activateUserSchema,
    resolve: async ({ input, ctx }) => {
      console.log('Input: ', input);
      const user = await ctx.prisma.user.findFirst({
        where: { id: input.id },
      });

      console.log(
        'Moment: ',
        moment().diff(moment(user?.emailVerificationSentOn), 'hours')
      );
      console.log('Exists: ', user);
      if (
        !user ||
        moment().diff(moment(user?.emailVerificationSentOn), 'hours') >= 24
      ) {
        throw new trpc.TRPCError({
          code: 'CONFLICT',
          message: 'Activation link is invalid or it has expired.',
        });
      }

      const result: User = await ctx.prisma.user.update({
        where: { id: input.id },
        data: { emailVerifiedOn: new Date() },
      });

      return {
        status: 201,
        message: 'Account activated successfully',
        result: result,
      };
    },
  })
  .query('me', {
    resolve({ ctx }) {
      return ctx.session?.user;
    },
  })
  // read
  .query('list', {
    async resolve() {
      /**
       * For pagination you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */

      return prisma.user.findMany({
        select: defaultUserSelect,
      });
    },
  })
  .query('byId', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;
      const user = await prisma.user.findUnique({
        where: { id },
        select: defaultUserSelect,
      });
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${id}'`,
        });
      }
      return user;
    },
  })
  // update
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        title: z.string().min(1).max(32).optional(),
        text: z.string().min(1).optional(),
      }),
    }),
    async resolve({ input }) {
      const { id, data } = input;
      const user = await prisma.user.update({
        where: { id },
        data,
        select: defaultUserSelect,
      });
      return user;
    },
  })
  // delete
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;
      await prisma.user.delete({ where: { id } });
      return {
        id,
      };
    },
  });
