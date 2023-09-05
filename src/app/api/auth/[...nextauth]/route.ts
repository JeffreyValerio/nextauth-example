import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async jwt({ token, account, profile, trigger, isNewUser, session }: any) {
            console.log({ token, account, profile, trigger, isNewUser, session })
            return token
        },

        async session({ session, token, user }: any) {
            session.access_token = token.accessToken
            console.log({ session, token, user })
            return session
        }
    },
})

export { handler as GET, handler as POST }