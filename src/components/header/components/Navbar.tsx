'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const session = useSession()
    const user: any = session?.data?.user

    return (
        <div className="grid grid-cols-4 justify-between items-center">
            <div className="col-start-1 col-end-2 flex items-center gap-4">
                <Link href={'/'}>
                    <Image src={'/logo.png'} width={50} height={50} alt='The NEXTAUTH logo' />
                </Link>
            </div>

            <div className='col-start-2 col-end-4 text-center'>
                <ul className='flex gap-4 justify-center'>
                    <li><Link href={'/'}>Homepage</Link></li>
                    <li><Link href={'/public-url'}>Public URL</Link></li>
                    <li><Link href={'/protected'}>Protected URL</Link></li>
                </ul>
            </div>

            <div className="col-start-4 col-end-5 flex gap-4 items-center justify-end">
                {!user ? (
                    <>
                        <Link href={'/api/auth/signin'}>Iniciar sesión</Link>
                    </>
                ) :
                    <>
                        <ul className="flex items-center">
                            <li> <Image className='w-full h-full' src={user.image as string} width={50} height={50} alt='photo profile' /> </li>
                            <div className='px-2'>
                                <li className="text-sm">{user.name}</li>
                                <li className="text-sm">{user.email}</li>
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