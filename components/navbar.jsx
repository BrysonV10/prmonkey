import { Avatar, AvatarFallback } from './ui/avatar'
import Link from 'next/link'
import { Button } from './ui/button'
import BananaIcon from './banana'
import MenuIcon from './menuIcon'
export default function Navbar(){
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
          <Link href="#" className="hover:underline" prefetch={false}>
            Runs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Stats
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
            <AvatarFallback className="bg-[#ffffff] text-black">JD</AvatarFallback>
            </Avatar> 
          </Button>
        </div>
      </header>
    )
}