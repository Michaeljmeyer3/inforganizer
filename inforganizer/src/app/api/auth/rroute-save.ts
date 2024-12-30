import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

interface AuthOptions {

  providers: OAuthConfig<GoogleProfile>[];
  session: {
    jwt: boolean;
  };

}
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  // Add your session configuration here
  session: {
    jwt: true,
  }
};
export default NextAuth(authOptions);