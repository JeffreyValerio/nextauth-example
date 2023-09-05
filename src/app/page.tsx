import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['700'], subsets: ['devanagari'] })

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto py-10">
      <div className="border shadow-2xl rounded-lg p-4 text-slate-800">
      <h1 className={`${poppins.className} text-7xl font-bold`}>
        The <span className="text-sky-950 text-8xl">NextAuth</span> example using 
        <span className="text-sky-800 text-8xl"> NextJS</span><code className="text-3xl">13.4.x</code>
      </h1>
      </div>
    </main>
  )
}
