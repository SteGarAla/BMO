import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-96 rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center">Welcome to BMO!</h2>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-500">Have an account? <Link href="/Login" className="text-blue-500">LOGIN</Link></p>
          <p className="text-gray-500">Don't have an account? <Link href="/SignUp" className="text-blue-500">SIGNUP</Link></p>
        </div>
      </div>
    </div>
  );
}
