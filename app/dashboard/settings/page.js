
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar";
import Footer from "components/footer"
import { useRouter } from "next/navigation"
import { Textarea } from "components/ui/textarea"

export default function Component() {
    let router = useRouter();
    return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
        <Navbar />
        <main className="flex-1 bg-muted/40 p-4 md:p-10">
        <div className="max-w-4xl mx-auto grid gap-8">
            <h1 className="font-semibold text-3xl">Settings</h1>
            <div className="grid gap-6">


            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between bg-card p-4 rounded-md [&[data-state=open]>svg]:rotate-90">
                <div className="flex items-center gap-4">
                    <UserIcon className="w-6 h-6" />
                    <h3 className="font-semibold">Account</h3>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-card rounded-md">
                <div className="grid gap-4">
                    <div className="grid gap-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="grid gap-1">
                    <Label htmlFor="email">Username</Label>
                    <Input id="username" type="text" placeholder="@username" />
                    </div>
                    <div className="grid gap-1">
                    <Label htmlFor="password">Set Password</Label>
                    <Input id="password" type="password" placeholder="********" />
                    </div>
                    <div className="grid gap-1">
                    <Label htmlFor="password">Set Bio</Label>
                    <Textarea />
                    </div>
                </div>
                <Button className="mt-4">Save Changes</Button>
                </CollapsibleContent>
            </Collapsible>


            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between bg-card p-4 rounded-md [&[data-state=open]>svg]:rotate-90">
                <div className="flex items-center gap-4">
                    <BellIcon className="w-6 h-6" />
                    <h3 className="font-semibold">Notifications</h3>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-card rounded-md">
                <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                    <Checkbox id="new-workouts" defaultChecked />
                    <Label htmlFor="new-workouts" className="text-base font-medium">
                        New Workouts
                    </Label>
                    </div>
                    <div className="flex items-center gap-4">
                    <Checkbox id="new-recipes" defaultChecked />
                    <Label htmlFor="new-recipes" className="text-base font-medium">
                        New Recipes
                    </Label>
                    </div>
                    <div className="flex items-center gap-4">
                    <Checkbox id="progress-updates" />
                    <Label htmlFor="progress-updates" className="text-base font-medium">
                        Progress Updates
                    </Label>
                    </div>
                    <div className="flex items-center gap-4">
                    <Checkbox id="challenges" />
                    <Label htmlFor="challenges" className="text-base font-medium">
                        Challenges
                    </Label>
                    </div>
                </div>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between bg-card p-4 rounded-md [&[data-state=open]>svg]:rotate-90">
                <div className="flex items-center gap-4">
                    <LockIcon className="w-6 h-6" />
                    <h3 className="font-semibold">Privacy</h3>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-card rounded-md">
                <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                    <Checkbox id="public-profile" />
                    <Label htmlFor="public-profile" className="text-base font-medium">
                        Public Profile
                    </Label>
                    </div>
                    <div className="flex items-center gap-4">
                    <Checkbox id="share-workouts" />
                    <Label htmlFor="share-workouts" className="text-base font-medium">
                        Share Workouts
                    </Label>
                    </div>
                    <div className="flex items-center gap-4">
                    <Checkbox id="share-progress" />
                    <Label htmlFor="share-progress" className="text-base font-medium">
                        Share Progress
                    </Label>
                    </div>
                </div>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between bg-card p-4 rounded-md [&[data-state=open]>svg]:rotate-90">
                <div className="flex items-center gap-4">
                    <CreditCardIcon className="w-6 h-6" />
                    <h3 className="font-semibold">Donate</h3>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-card rounded-md">
                <div className="grid gap-4">
                    <div className="grid gap-1">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid gap-1">
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" placeholder="MM/YY" />
                    </div>
                    <div className="grid gap-1">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                    </div>
                </div>
                </CollapsibleContent>
            </Collapsible>
            <Button className="mt-4" onClick={()=>router.push("/dashboard")}>Back to Dashboard</Button>
            </div>
        </div>
        </main>
        <Footer />
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}