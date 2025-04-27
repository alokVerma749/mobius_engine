import { CheckCircle2 } from 'lucide-react'
import { GetStartedButton } from '../GetStartedButton'

export function AdvanceTier() {
  return (
    <div className="bg-[#0649E7] rounded-xl mx-auto p-8 text-white my-8 w-[75%]">
      <div className="flex justify-between items-start flex-col md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">Advance</h2>
          <p className="text-sm mb-6">Top-tier support for serious job hunters:</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Everything in Plus</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Custom Resumes & Cover Letters</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>20 fully customized applications/week</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Help with complex job searches</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Access to senior resume experts, Founder & Exec Coaches</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">$150</span>
            <span className="text-lg">/week</span>
          </div>

          <div className="mt-44">
            <GetStartedButton variant="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
