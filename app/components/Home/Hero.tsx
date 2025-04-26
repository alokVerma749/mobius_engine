import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex px-12 pt-20">
      <div className="w-1/2">
        <h1 className="text-white text-6xl font-bold leading-tight">
          Land job interviews <br />
          <span className="text-[#1e90ff]">10x</span> faster
        </h1>
        <p className="text-white text-xl mt-6 mb-8">
          Custom-built resumes that match your goals, keywords, and<br />
          recruiter expectations.
        </p>
        <Link
          href="#"
          className="bg-white text-[#0649E7] px-8 py-4 rounded-full font-medium inline-flex items-center"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="w-1/2 flex justify-center">
        <div className="relative bg-white p-4 rounded-lg max-w-md">
          <div className="text-center">
            <Image alt='hero image' height={300} width={300} src='/hero.png' />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white/70 rounded-full p-4 dark:bg-zinc-400/40 backdrop-blur-md shadow-2xl border border-white/20 dark:border-white/10">
            <div className="relative">
              📖
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              Download Free E-Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero