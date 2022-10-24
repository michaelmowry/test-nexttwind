import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { unstable_getServerSession } from 'next-auth';
import { prisma } from '../../db/index';
import { nextAuthOptions } from '../utils/nextAuthOptions';

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
  const { req, res } = ctx;
  const session = await unstable_getServerSession(req, res, nextAuthOptions);

  return {
    req,
    res,
    session,
    prisma,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
