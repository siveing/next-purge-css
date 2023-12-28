import Link from "next/link";

function TestingPage() {
    return (
        <div className="p-5 bg-green-100">
            <p className="my-4">Welcome to testing page</p>
            <Link href={'/'} className='p-2 bg-green-400 rounded-lg no-underline text-white'>Back</Link>
        </div>
    );
}

export default TestingPage;