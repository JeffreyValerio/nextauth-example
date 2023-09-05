'use client'

import { useSession } from 'next-auth/react'

const UserData = () => {

    const data = useSession()

    return (
        <div className="bg-slate-800 px-4 my-10 text-white rounded-xl overflow-hidden">
            <pre className='py-10'>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default UserData