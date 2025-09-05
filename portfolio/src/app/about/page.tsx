import Link from 'next/link'


export default function about(): JSX.Element {

  const age = getAge();


  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-black font-bold">
          <Link href="/"> ← Back to Home </Link>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-black">About Me</h1>
        <ul className="text-xxl">
          <li><h2 className="text-black font-bold">Name: Colin Berendt</h2></li>
          <li><h2 className="text-black font-bold">Age: {age}</h2></li>
          <li><h2 className="text-black font-bold">Degree: Bachelor of Science Computer Science</h2></li>
        </ul>
        <button>
          <Link href={'https://www.linkedin.com/in/colin-berendt-7a0788291/'} >My LinkedIn</Link>
        </button>
      </main >
    </div >
  )
}


function getAge() {

  const birthDate = new Date('2004-06-25');
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || monthDiff === 0) {
    age--;
  }

  return age;
}

