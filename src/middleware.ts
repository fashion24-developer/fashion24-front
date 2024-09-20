// import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

//넘어오는 토큰타입
interface TokenType {
  sub: string;
  userId: number;
  userRole: string;
  iat: number;
  exp: number;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //https로 변경시 활성화
  //   const admin = request.cookies.get('accessToken');
  //   const decode: TokenType = jwtDecode(admin?.value as string);
  //   if (decode.userRole !== 'ADMIN') {
  //     return NextResponse.redirect(new URL('/', request.url));
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
};
