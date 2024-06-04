/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ExYrpAJPMFG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DarkNavbar } from "@/components/navbar"

export default function Component() {
  return (
    <>
    <DarkNavbar/>
    <div className="w-full max-w-3xl mx-auto py-12 md:py-20">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto">
          Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10 bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 md:p-10">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
    </>
  )
}