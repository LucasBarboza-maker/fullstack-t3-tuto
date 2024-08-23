import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({

  all: protectedProcedure.query(() => {
    
    return [{
      id: 'fake1',
      text: 'fake text',
      done: false
    },
    {
      id: 'fake2',
      text: 'fake text',
      done: true
    }]
  }),

});
