import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen pt-8 px-8 pb-20 sm:pt-12 sm:px-20 font-[family-name:var(--font-geist-sans)] bg-blue-200">
      <Title />
      <Image
        src="/ColinBerendt.jpg"
        width={500}
        height={500}
        alt="Picture of me"
      />
    </div>

  )
}

function Title(): JSX.Element {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-4xl sm:text-6xl font-bold text-center text-black">Colin Berendt</h1>
      <h3 className="text-black font-bold">HELLO AND WELCOME !</h3>
      <p className="text-black"> This is my little portfolio project. In here, I will tell you a little more about myself. I have chosen to
        do this project as it utilizes Next.js which is completely new for me so it proves to be a challenge and a learning
        opportunity to me to become a better coder. </p>
    </main>

  );
}