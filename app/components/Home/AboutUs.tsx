import { Linkedin } from 'lucide-react'
import Image from 'next/image'

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-[#010b2c] via-[#051d5c] to-[#0649E7] text-white py-16">
      <div className="container px-4 w-[75%] mx-auto">
        <h2 className="text-3xl font-bold mb-12">About Us</h2>

        <div className="space-y-16 w-[75%] mx-auto">
          {/* First Team Member */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
                <Image
                  src="/about-2.png"
                  alt="Ashwin"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 p-2 rounded-full bg-white/70  dark:bg-zinc-400/40 backdrop-blur-md shadow-2xl border border-white/20 dark:border-white/10">
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
            <div className="relative">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <Image
                  src="/about-1.png"
                  alt="Nicole"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 p-2 rounded-full bg-white/70  dark:bg-zinc-400/40 backdrop-blur-md shadow-2xl border border-white/20 dark:border-white/10">
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

          <div className="space-y-2 mt-8 text-right flex flex-col justify-center items-center">
            <p className="flex items-center justify-end gap-2">
              Learn more about our Board of Advisors →
            </p>
            <p className="flex items-center justify-end gap-2">
              Follow us on our LinkedIn page →
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
