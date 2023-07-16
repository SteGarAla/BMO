import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { prisma } from './db';
import bcrypt from "bcrypt";


//encrypting the password using bcrypt
async function hashPass(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function login(data: FormData){
  "use server"


  // retrieving the data from the form
  const username = data.get("userName")?.toString();
  const email = data.get("email")?.toString();
  const password = data.get("password");

  // looking up if the user has created an account before or will need to sign up
  const userExist = await Lookup(username, email);

  // if the user exist, carry on with hashing the password and verfying that hashed password equals hashed input

  if (userExist != null){
    
  }

  // if user does not exist in db, send them to sign-up page,so that they can create an account


  // hashing the password
  if (password !== null && typeof password === 'string') {
    const hashedPassword = await hashPass(password);
  } 


  //
}


async function Lookup(username: string | undefined, email: string | undefined): Promise<Boolean> {
  "use server"
  // checks if the user is found in the database
  const user = await prisma.user.findMany({
    where: {
      OR: [
        { username: { equals: username } },
        { email: { equals: email } }
      ]
    }
  });

  return (user != null);
}


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-96 rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center">LOGIN</h2>
        </div>
        <form action={login} className="flex flex-col gap-4">
          <input
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
          <p className="text-gray-500">Don't have an account? <Link href="/login" className="text-blue-500">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
