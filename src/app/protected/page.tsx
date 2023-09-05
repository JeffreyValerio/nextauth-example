import { getServerSession } from 'next-auth'
import { handler as authOptions } from '../api/auth/[...nextauth]/route'

const ProtectedPage = async () => {
    const session = await getServerSession(authOptions)

    return (
        <div className="max-w-[1280px] mx-auto py-10">
            {session
                ? (<h1 className="text-3xl text-green-600">This is protected content. You can access this content because you are signed in.</h1>)
                : (<h1 className="text-3xl text-red-600">You must be signed in to view the protected content on this page.</h1>)
            }
        </div>
    )
}

export default ProtectedPage 