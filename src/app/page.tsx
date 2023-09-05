import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['700'], subsets: ['devanagari'] })

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto py-10  h-[calc(h-screen-52px)] px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-4">
        <div className="text-slate-800 h-full col-start-1 col-end-2 md:col-start-1 md:col-end-2">
          <h1 className={`${poppins.className} text-7xl font-bold`}>
            The <br />
            <span className="text-sky-950 text-5xl md:text-8xl">NextAuth </span> <br />
            example using <br />
            <span className="text-sky-800 text-5xl md:text-8xl"> NextJS</span><code className="text-2xl font-thin">13.4.x</code>
          </h1>
        </div>
        <div className="flex items-center justify-center col-start-1 col-end-2 md:col-start-2 md:col-end-3">
          <Image className="" src={'/logo.png'} width={200} height={200} alt='The NEXTAUTH logo' />
        </div>
      </div>
    </main>
  )
}
