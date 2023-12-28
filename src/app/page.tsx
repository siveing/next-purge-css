import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='p-5 bg-yellow-200'>
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <h2 className='text-base text-red-500 my-4'>Helo this siveing</h2>

            <Link href={'testing'} className='p-2 bg-red-400 rounded-lg no-underline text-white'>Testing</Link>
        </div>
    )
}
