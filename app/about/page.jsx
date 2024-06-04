/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HL42my2VmXh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Footer from "@/components/footer"
import { DarkNavbar } from "@/components/navbar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <DarkNavbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  About PR Monkey
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  PR Monkey was created to build a new platform for users to share, verify, and analyze race results - all in one central location. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our History
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connecting with the Community</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  As runners ourselves, we knew the need for a platform that could provide accurate and verifiable information in a clean and 
                  easy to use interface. 
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Empowering Athletes</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our mission is to provide a platform that is easy to use and understand, while providing easily accessible tools for everyone. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Founders</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  PR Monkey was founded by a team of passionate individuals with a vision. Get
                  to know the people behind the company and learn more about their unique backgrounds and expertise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Abe Jager</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder, Foundational Innovator</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    As the man with the vision, Abe leads the PR Monkey Team.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarFallback>BV</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Bryson Van Ryn</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder, Head of Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Providing the technical expertise, Bryson leads development of PR Monkey.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarFallback>AJ2</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Asher Jager</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder, Head of Operations</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Asher provides the organizational expertise to keep PR Monkey running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
