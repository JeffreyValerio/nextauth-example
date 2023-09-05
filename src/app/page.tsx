import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['700'], subsets: ['devanagari'] })

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto py-10  h-[calc(h-screen-52px)]">
      <div className="grid grid-cols-2">
        <div className="text-slate-800 h-full">
          <h1 className={`${poppins.className} text-7xl font-bold`}>
            The <br />
            <span className="text-sky-950 text-8xl">NextAuth </span> <br />
            example using <br />
            <span className="text-sky-800 text-8xl"> NextJS</span><code className="text-2xl font-thin">13.4.x</code>
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <Image className="" src={'/logo.png'} width={200} height={200} alt='The NEXTAUTH logo' />
        </div>
      </div>
    </main>
  )
}
