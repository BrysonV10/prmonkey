"use client"
import { Avatar, AvatarFallback } from './ui/avatar'
import Link from 'next/link'
import { Button } from './ui/button'
import BananaIcon from './banana'
import MenuIcon from './menuIcon'
import PocketBase from 'pocketbase'
import {useRouter} from "next/navigation"
export default function Navbar(){
    let router = useRouter();
    let pb = new PocketBase("http://127.0.0.1:8090");
    return (
        <header className="bg-[#6366F1] text-white px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <BananaIcon className="w-6 h-6 text-[#FCD34D]" />
          <span>PR Monkey</span> 
        </Link>
        <div className="flex items-center gap-4 md:hidden"> 
          <Button variant="ghost" size="icon" className="rounded-full">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <p>Search</p>
          <Link href="#" className="hover:underline" prefetch={false}>
            Runs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Stats
          </Link>
          <p className='hover:underline cursor-pointer' onClick={()=>{pb.authStore.clear(); router.push("/")}}>
            Sign Out
          </p>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
            <AvatarFallback className="bg-[#ffffff] text-black">JD</AvatarFallback>
            </Avatar> 
          </Button>
        </div>
      </header>
    )
}

function DarkNavbar(props){
  return (
    <header className="bg-gray-900 px-4 py-6 text-white md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
          <div className="flex items-center gap-2">
            <BananaIcon className="h-8 w-8" />
            <span className="text-xl font-bold">PR Monkey</span>
          </div>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="/about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            {
              !props.hideAuth?
              <>
              <Link href="/signup" className="hover:underline font-bold">
              Sign Up
            </Link>
            <Link href="/login" className='hover:underline font-bold'>
              Log In
            </Link>
              </>
              :
              null
            }
            
          </nav>
        </div>
      </header>
  )
}

export {DarkNavbar, Navbar}