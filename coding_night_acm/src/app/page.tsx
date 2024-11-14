import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    
    <div className="flex items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-black">Colin Berendt</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-black">
          <li className="mb-2">
            <Link href="/about">ABOUT ME</Link> 
          </li>
          <li className="mb-2">
            <Link href="/portfolio">PORTFOLIO</Link> 
          </li>
        </ol>
      </main>
    </div>
  )
};