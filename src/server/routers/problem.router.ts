import { Prisma } from '@prisma/client';
import { prisma } from '../../../db/index';
import { createRouter } from '../createRouter';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */
const defaultProblemSelect = Prisma.validator<Prisma.ProblemSelect>()({
  id: true,
  userId: true,
  imageURL: true,
  headline: true,
  description: true,
  background: true,
  createdAt: true,
  createdBy: true,
});

export const problemRouter = createRouter()
  // create
  .query('list', {
    async resolve() {
      /**
       * For pagination you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */
      return prisma.problem.findMany({
        select: defaultProblemSelect,
      });
    },
  });
