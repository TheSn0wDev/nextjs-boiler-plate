import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import "./src/env/client";
import "./src/env/server";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin("./src/translations/request.ts");

export default withNextIntl(nextConfig);
