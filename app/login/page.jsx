/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nmgWj74RwGh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BananaIcon from "@/components/banana"
import Footer from "@/components/footer"
import { DarkNavbar } from "@/components/navbar"
export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <DarkNavbar hideAuth={true}/>
      <main className="flex-1">
        <section className="bg-gray-900 py-12 text-white md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Unlock Your Potential with PR Monkey
              </h1>
              <p className="text-gray-400 md:text-xl">
                Easy Race Results Tracking and Analysis
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-black">Sign in to PR Monkey</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required className="text-black"/>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required className="text-black"/>
                </div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </form>
              <br/>
              <p className="text-black">Haven't joined yet? <Link href="/signup" className="font-bold">Join Us Now!</Link></p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

