import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const subscribeRouter = createTRPCRouter({
  sub: publicProcedure
    .input(
      z.object({
        text: z
          .string()
          .min(5, { message: "Most be 5 or more charecters jf length" }),
      })
    )
    .query(({ input }) => {
      return {
        pleaseSub: `Please subscribe to my account  ${input.text}`,
      };
    }),
});
