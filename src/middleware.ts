import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { auth } from "./auth";
import { routing } from "./translations/routing";

const localeMiddleware = createMiddleware(routing);
const locales = routing.locales;
const publicPages = ["/"];

export default function middleware(req: NextRequest) {
  const isPublic = publicPages.some(
    (p) =>
      req.nextUrl.pathname === p ||
      locales.some((loc) => req.nextUrl.pathname === `/${loc}${p}`)
  );
  if (isPublic) return localeMiddleware(req);

  return (
    auth as unknown as (
      middleware: (req: NextRequest) => Response | Promise<Response>
    ) => (req: NextRequest) => Promise<Response>
  )((req: NextRequest) => {
    return localeMiddleware(req);
  })(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
