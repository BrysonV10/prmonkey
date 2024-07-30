"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nmgWj74RwGh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { DarkNavbar } from "@/components/navbar"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import BananaLoader from "@/components/bananaLoader"
import { useRouter } from "next/navigation"


export default function Component() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState('');
  let [username, setUsername] = useState("")
  let [part, setPart] = useState(1);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

 
  let router = useRouter();

  function signUpUser(e){
    e.preventDefault();
    
    if(password.length > 6){
      setLoading(true);
      setLoading(false);
      setError("");
      setPart(2);
      
    }
  }

  async function partTwo(e){
    e.preventDefault();
    setLoading(true)
    setLoading(false);
    setError("")
    setPart(3);
    
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <DarkNavbar hideAuth={true}/>
      <main className="flex-1">
        <section className="bg-gray-900 py-12 text-white md:py-24 lg:py-32 min-h-full">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Unlock Your Potential with PR Monkey
              </h1>
              <p className="text-gray-400 md:text-xl">
                Easy Race Results Tracking and Analysis
              </p>
            </div>
          {part==1?
            <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-black">Welcome to PR Monkey!</h2>
            <form className="space-y-4" onSubmit={signUpUser}>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required className="text-black" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required className="text-black" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div>
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="password" type="password" placeholder="Confirm your password" required className="text-black" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
              </div>
              {password!=confirmPassword?
              <Alert>
                <AlertTitle>Password Fields Do Not Match!</AlertTitle>
                <AlertDescription>Ensure password fields match before submitting!</AlertDescription>
              </Alert>
              :null
              }
              {error!=""&&part==1?
              <Alert>
                <AlertTitle>Oops! Something went wrong!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              :null
              }
              <Button type="submit" className="w-full" disabled={password!=confirmPassword || password.length < 6}>
                {loading&&part==1?<BananaLoader/>:"Sign Up"}
              </Button>
            </form>
            <br/>
            <p className="text-black">Already a part of PR Monkey? <Link href="/login" className="font-bold">Log In Now!</Link></p>
          </div>
          :null
          }
        {part==2?
        <div className="rounded-lg bg-white p-6 shadow-lg md:p-8 text-black" >
          <h2 className="mb-4 text-2xl font-bold text-black">Just a few more details...</h2>
          <form className="space-y-4" onSubmit={partTwo}>
            <div>
              <Label htmlFor="name">First and Last Name</Label>
              <Input id="name" type="text" required className="text-black" value={name} onChange={(e)=>setName(e.target.value)}/>
              <i className="text-sm">Ensure this matches exactly what might be posted on race result websites!</i>
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" required className="text-black" value={"@"+username} onChange={(e)=>setUsername(e.target.value.slice(1))}/>
            </div>
            {error!=""&&part==2?
              <Alert>
                <AlertTitle>Oops! Something went wrong!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              :null
              }
            <Button type="submit" className="w-full" disabled={name.length==0 || username.length<4}>
              {loading&&part==2?<BananaLoader/>:"Finish"}
            </Button>
          </form>
        </div>
        :null}

      {part==3?
        <div className="rounded-lg bg-white p-6 shadow-lg md:p-8 text-black" >
          <h2 className="mb-4 text-2xl font-bold text-black">One last thing...</h2>
          <div className="space-y-4">
          <p className="text-black">We've sent a verification email to <span className="font-bold">{email}</span>. Please verify your email address before continuing.</p>
          <br/>
          <Button className="w-full" onClick={()=>{setLoading(true);router.push("/dashboard");}}>{loading&&part==3?<BananaLoader/>:"I've Verified my Email Address"}</Button>
          <br/>
          <br/>
          </div>
        </div>
        :null}
        </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

