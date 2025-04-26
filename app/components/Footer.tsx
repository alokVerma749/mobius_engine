import { Linkedin } from "lucide-react"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container mx-auto p-4">
        <div className="py-8">
          <Logo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-gray-200">
          <div>
            <h3 className="text-sm font-medium mb-2">Address</h3>
            <p className="text-sm text-[#0649E7]">
              1875 Mission St Ste 103 #450
              <br />
              San Francisco, CA 94103
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Email</h3>
            <p className="text-sm text-[#0649E7]">finance@mobiusengine.ai</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Telephone</h3>
            <p className="text-sm text-[#0649E7]">650-889-6026</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Socials</h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full border border-[#0649E7] flex items-center justify-center">
                <Linkedin className="h-4 w-4 text-[#0649E7]" />
              </div>
              <div className="w-8 h-8 rounded-full border border-[#0649E7] flex items-center justify-center">
                <Linkedin className="h-4 w-4 text-[#0649E7]" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="py-4 bg-[#0649E7] text-white mt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© 2023 Mobiusservices LLC</div>
        <div className="flex gap-8 text-sm">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}
