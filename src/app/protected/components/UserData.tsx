'use client'

import { useSession } from 'next-auth/react'

const UserData = () => {

    const data = useSession()

    return (
        <p className='py-10'>
            {JSON.stringify(data)}
        </p>
    )
}

export default UserData