import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", // Allow sign-in pages
  "/sign-up(.*)", // Allow sign-up pages
  "/About(.*)",   // Public About route
  "/"             // Public home route
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    // Protect non-public routes
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)", // Match API routes
  ],
};
