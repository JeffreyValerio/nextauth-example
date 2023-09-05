import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

interface userSession {
    session: any,
    token: any,
    user: any
}

export const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
    callbacks: {
        async jwt({ token, account, profile, trigger, isNewUser, session }: any) {

            token.accessToken = account.id_token

            console.log({ token, account, profile, trigger, isNewUser, session })
            return token
        },

        async session({ session, token, user }: userSession) {
            session.access_token = token.accessToken
            session.user = token.user as any
            console.log({ session, token, user })
            return session
        }
    },
})

export { handler as GET, handler as POST }