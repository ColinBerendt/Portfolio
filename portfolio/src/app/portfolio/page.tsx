import Link from 'next/link'


export default function portfolio() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-black font-bold">
          <Link href="/"> ← Back to Home </Link>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-black">Portfolio</h1>
        <ul className="text-xxl">
          <div className="text-black font-bold mt-4">
            <Link href="https://github.com/ColinBerendt/Coding-Night" target="_blank">
              GitHub Repo
            </Link>
          </div>
        </ul>
      </main>
    </div>
  )
}