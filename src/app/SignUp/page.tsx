import Link from 'next/link';
import { login,usernameAvailibility } from '../userUtil';

export default async function Home() {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-96 rounded-lg shadow-lg p-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center">SIGN-UP</h2>
        </div>
        <form action = {login} className="flex flex-col gap-4">
          // username is not available
          //username is available
        <input
        required
          minLength={3} maxLength={15}
            type='userName'
            name="login"
            //on change
            className="border border-gray-300 rounded-md p-3"
            placeholder="Username"
          />


          <input
          required
          minLength={9} maxLength={30}
            type="email"
            name="login"
            className="border border-gray-300 rounded-md p-3"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="border border-gray-300 rounded-md p-3"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-500">Have an account? <Link href="/Login" className="text-blue-500">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
