import { Linkedin } from 'lucide-react'

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-[#010b2c] to-[#0649E7] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">About Us</h2>
        
        <div className="space-y-16">
          {/* First Team Member */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full">
                <Linkedin className="h-6 w-6 text-[#0649E7]" />
              </div>
            </div>
            
            <div className="max-w-xl">
              <p>
                <span className="font-bold">Ashwin</span> is the founder of mobiusengine.ai. He is an accomplished 
                senior executive with over 20 years of experience in cloud 
                infrastructure and financial services. With over 2 decades of 
                experience at Google and JP Morgan, Ashwin held various product 
                and GTM roles. Ashwin is an MBA holder from Yale University.
              </p>
              <p className="mt-4">
                Ashwin's vision with Mobius is to give job seekers a significant 
                advantage in securing the roles of their dreams.
              </p>
            </div>
          </div>
          
          {/* Second Team Member */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative border-2 border-purple-500 rounded-full p-1">
              <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full">
                <Linkedin className="h-6 w-6 text-[#0649E7]" />
              </div>
            </div>
            
            <div className="max-w-xl">
              <p>
                <span className="font-bold">Nicole</span> is an Executive coach at Mobius specializing in resume 
                builds and career advisory.
              </p>
              <p className="mt-4">
                With a B.S. in Business Administration from UC Berkeley and 7+ 
                years of experience in AI-driven product strategy, she has seen 
                firsthand how the proper positioning opens doors. She takes a 
                targeted, results-driven approach to help clients confidently stand 
                out and land roles that truly match their skills and potential.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 mt-8">
            <p className="flex items-center gap-2">
              Learn more about our Board of Advisors →
            </p>
            <p className="flex items-center gap-2">
              Follow us on our LinkedIn page →
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
