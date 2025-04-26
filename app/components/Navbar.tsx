import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12">
      <div className="flex items-center text-xl">
        <Link href="/" className="flex items-center">
          <div className="w-40 text-[#FEFEFE] font-mono flex items-center">
            {/* <Image src="/logo.png" alt="MobiusEngine" width={150} height={40} className="object-contain" /> */}
            <span>MobiusEngine</span>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About Us
        </Link>
        <Link href="/plans" className="nav-link">
          Plans
        </Link>
        <Link href="/testimonials" className="nav-link">
          Testimonials
        </Link>
        <Link href="/privacy" className="nav-link">
          Privacy Policy
        </Link>
        <div className="relative group">
          <button className="nav-link flex items-center">
            More <span className="ml-1">▼</span>
          </button>
        </div>
      </div>

      <div>
        <Link
          href="/get-started"
          className="bg-white text-blue-600 hover:bg-[#022183] hover:text-[#FEFEFE] font-semibold py-2 px-6 rounded-full"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
