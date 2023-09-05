'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const session = useSession()
    const user: any = session?.data?.user

    return (
        <div className="flex justify-between items-center">
            <Image src={'/logo.png'} width={50} height={50} alt='The NEXTAUTH logo' />

            <div className="flex gap-4 items-center">
                {!user ? (
                    <>
                        <Link href={'/api/auth/signin'}>Iniciar sesión</Link>
                    </>
                ) :
                    <>
                        <ul className="flex items-center border shadow-2xl">
                            <li> <Image className='w-full' src={user.image as string} width={50} height={50} alt='photo profile' /> </li>
                            <div className='py-1 px-2'>
                                <li>{user.name}</li>
                                <li>{user.email}</li>
                            </div>
                        </ul>
                        <button className="px-4 py-2 bg-black text-white" onClick={() => { signOut() }}>Salir</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar