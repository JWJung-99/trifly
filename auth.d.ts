export declare module "@auth/core/types" {
  interface User {
    type?: string;
    birth: string;
    phone: string;
    loginType: "email" | "kakao" | "google";
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
  interface Session {
    loginType: "email" | "kakao" | "google";
    accessToken: string;
    refreshToken: string;
  }
}
export declare module "@auth/core/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    birth: string;
    phone: string;
    loginType: "email" | "kakao" | "google";
  }
}
