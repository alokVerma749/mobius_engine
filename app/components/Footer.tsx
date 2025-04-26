import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="MobiusEngine" width={120} height={40} className="object-contain" />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Address</h4>
            <p className="text-sm">
              1875 Mission St Ste 103 #460
              <br />
              San Francisco, CA 94103
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Email</h4>
            <Link href="mailto:finance@mobiusengine.ai" className="text-blue-600 text-sm">
              finance@mobiusengine.ai
            </Link>

            <h4 className="text-sm font-semibold mt-4 mb-2">Telephone</h4>
            <p className="text-sm">650-889-6026</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Socials</h4>
            <div className="flex space-x-2">
              <Link href="#" className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2023 Mobiusservices LLC</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
