import bcrypt from "bcrypt"
import { prisma } from "./db";
import { redirect } from "next/navigation";

  // hashes the password using bcrypt
  async function hashPass(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  // checks if password that was entered into the form equals that to the users information
  async function passVerification(unhashed: string, hashed: string){
    const compare = await bcrypt.compare(unhashed,hashed)
    return compare 
}

 


//handles  username Availibility when signing up
export async function usernameAvailibility(username: string){
  const search = prisma.user.findMany({
    where: {
      username: username
    }
  })

  return (search == null)
}















  // handles the process of logging in
  export async function login(data: FormData){
    "use server"

    
    //gets users email and password from the form
    const Iemail = data.get("email")?.toString();
    const password = data.get("password")?.toString();
  

    //looks up if email has valid 
    const search = await prisma.user.findMany({
      where:{
        email: Iemail
      }
    })


    if (search != null){

      if (password !== null && typeof password === 'string') {
        // hashes the password that user entered
        const hpass = await hashPass(password);
        const gob = await passVerification(hpass,password)

        if(gob){
          redirect("/dashboard")
        }
        else{
         redirect("/Login")
        }
      } 
    }
    else{
        redirect("/")
    }

  }
  




  export async function signup(data: FormData){
    // sign-in logic for the user
  }

























