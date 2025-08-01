import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import WithAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
  // const isLogin = true;
  // if(!isLogin){
  //     return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export default WithAuth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "register",
]);

// export const config = {
//     matcher: [
//         "/dashboard/:path*",
//         "/about/:path*",
//     ]
// }
