import { CheckCircle2 } from "lucide-react"
import { GetStartedButton } from "../GetStartedButton"

export function ResumeCoaching() {
  return (
    <div className="space-y-8 w-[75%] mx-auto my-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-[#0649E7]">Resume Building & Coaching</h2>
        <div className="">
          <p className="text-[#0649E7] font-medium">Let's talk about where you're headed — and how your resume can get you there.</p>
          <p className="text-[#0649E7] font-medium">Schedule a call to get started.</p>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap">
        {/* Resume Rebuild */}
        <div className="border-2 border-[#0649E7] rounded-lg p-6 w-[40%]  flex flex-col">
          <h3 className="text-xl font-bold text-[#0649E7] mb-2">Resume Rebuild</h3>
          <p className="text-sm mb-4">Crafted for senior to VP-level professionals ready for their next big step.</p>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-[#0649E7]">$1000</span>
            <span className="text-lg ml-2">one time</span>
          </div>

          <div className="my-4 border border-gray-200" ></div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>3x 30-min coaching</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Focused on storytelling, not just formatting</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Analyst + full application team on Pacific hours</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Tailored to your target industry, company, or role</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Direct work with our co-founder (ex-Google, JP Morgan)</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Executive coaching from UC Berkeley alum with 10+ yrs experience</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Resume Rebuild portfolio available upon request</span>
            </div>
          </div>

          <div className="mt-auto">
            <GetStartedButton />
          </div>
        </div>

        {/* Interview Prep */}
        <div className="border-2 border-[#0649E7] rounded-lg p-6 w-[40%] flex flex-col">
          <h3 className="text-xl font-bold text-[#0649E7] mb-2">Interview Prep</h3>
          <p className="text-sm mb-4">Two sessions to sharpen your story, confidence, and clarity — fast.</p>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-[#0649E7]">$500</span>
            <span className="text-lg ml-2">one time</span>
          </div>

          <div className="my-4 border border-gray-200" ></div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>2x 45-min live coaching with our co-founder</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Real-time, practical feedback</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Build clarity, empathy & executive presence</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>For senior and leadership roles — technical & non-technical</span>
            </div>
          </div>
          <div className="mt-auto">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </div>
  )
}
