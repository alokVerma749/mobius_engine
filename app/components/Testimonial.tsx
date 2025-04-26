import { ArrowUpRight } from 'lucide-react'
import Button from './Button'


const Testimonial = () => {
  return (
    < section className="py-16 md:py-24 bg-gray-50" >
      <div className="container mx-auto px-6 w-[80%]">
        <h2 className="text-3xl font-medium text-blue-600 mb-16">What our clients have to say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md bg-[#0649E7]">
              <div className="h-48 bg-gray-200 flex items-center justify-center rounded-xl">
                <button className="w-12 h-12 rounded-full bg-[#0649E7] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 bg-[#0649E7] text-white">
                <p className="mb-2">
                  Holly is a <span className="font-bold">senior executive</span> who got over{" "}
                  <span className="font-bold">10 job interviews</span> and an offer she accepted
                </p>
                <div className="flex justify-end">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight color="#0649E7" size={19} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-6">
          <Button href="/testimonials" variant="outline" arrow className="hover:bg-[#022183] hover:text-white bg-white font-medium">
            More customer testimonials
          </Button>
          <Button href="/get-started" arrow>
            Get Started
          </Button>
        </div>
      </div>
    </section >
  )
}

export default Testimonial