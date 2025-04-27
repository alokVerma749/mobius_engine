import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { GetStartedButton } from "./GetStartedButton"

interface NavbarProps {
  style?: string;
}

export default function Navbar({ style = "transparent" }: NavbarProps) {
  return (
    <nav className={`flex justify-between flex-col md:flex-row items-center py-4 px-12 ${style}`}>
      <div className="flex items-center">
        <div className="mr-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20C35 11.716 28.284 5 20 5ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z" fill="white" />
          </svg>
        </div>
        <h1 className="text-white text-xl font-medium">MobiusEngine</h1>
      </div>

      <div className="items-center space-x-8 w-[80%] justify-between hidden md:flex">
        <div className="flex items-center justify-evenly w-3/4">
          <Link href="#" className="text-white">Home</Link>
          <Link href="#" className="text-white">About Us</Link>
          <Link href="#" className="text-white">Plans</Link>
          <Link href="#" className="text-white">Testimonials</Link>
          <Link href="#" className="text-white">Privacy Policy</Link>
          <div className="flex items-center text-white">
            <span>More</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
        </div>
        <GetStartedButton variant="white" />
      </div>
    </nav>
  )
}
