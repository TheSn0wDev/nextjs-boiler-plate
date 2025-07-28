import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    AUTH_SECRET: z.string().min(1, "AUTH_SECRET must be set"),
  },
  experimental__runtimeEnv: process.env,
});
