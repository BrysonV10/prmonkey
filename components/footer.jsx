import Link from "next/link"
export default function Footer(){
    return (
        <footer className="bg-gray-900 py-6 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <p className="text-sm">&copy; 2024 PR Monkey</p>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    )
}