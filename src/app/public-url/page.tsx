import { getServerSession } from 'next-auth'
import { handler as authOptions } from '../api/auth/[...nextauth]/route'

const PublicPage = async () => {
    const session = await getServerSession(authOptions)

    return (
        <div className="max-w-[1280px] mx-auto py-10">
            <h1 className="text-3xl text-green-600">It is not necessary to be registered to view this content page.</h1>
        </div>
    )
}

export default PublicPage 