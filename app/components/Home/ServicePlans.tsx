import { CheckCircle2 } from "lucide-react"
import { GetStartedButton } from "../GetStartedButton"

export function ServicePlans() {
  return (
    <div className="space-y-8 w-[75%] mx-auto">
      <h2 className="text-3xl font-medium text-center text-[#0649E7]">Job Application Service Plans</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* April Promo Plan */}
        <div className="border border-[#0649E7] rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-bold text-[#0649E7] mb-4">April Promo</h3>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-[#0649E7]">$35</span>
            <span className="text-lg text-[#0649E7]">/week</span>
          </div>

          <div className="my-4 border border-gray-200" ></div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Curated jobs from 1M+ listings, refreshed every 48 hours</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Need more? Add extra apps for just $15 each</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Your own dedicated application analyst</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Personalized with up to 10 filters & 5 job titles</span>
            </div>
          </div>

          <div className="mt-auto">
            <GetStartedButton />
          </div>
        </div>

        {/* Starter Plan */}
        <div className="border border-[#0649E7] rounded-lg p-6 relative flex flex-col">
          <div className="absolute top-4 right-4 bg-blue-100 text-[#0649E7] text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </div>

          <h3 className="text-xl font-bold text-[#0649E7] mb-4">Starter</h3>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-[#0649E7]">$50</span>
            <span className="text-lg text-[#0649E7]">/week</span>
          </div>

          <div className="my-4 border border-gray-200" ></div>

          <div className="space-y-4 mb-8">
            <p className="text-sm">All the perks of the Promo Plan, plus:</p>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Resume review & story-focused feedback</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Dedicated search specialist</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Up to 50 job apps/week</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Extra apps at $15 each</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Analyst support within 6 hours (SLA/PST hours)</span>
            </div>
          </div>

          <div className="mt-auto">
            <GetStartedButton />
          </div>
        </div>

        {/* Plus Plan */}
        <div className="border border-[#0649E7] rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-bold text-[#0649E7] mb-4">Plus</h3>

          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-[#0649E7]">$100</span>
            <span className="text-lg text-[#0649E7]">/week</span>
          </div>

          <div className="my-4 border border-gray-200" ></div>

          <div className="space-y-4 mb-8">
            <p className="text-sm">Everything in Starter, with more muscle:</p>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Up to 75 apps/week</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Apply to 15 job titles</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              <span>Analyst + full application team on Pacific hours</span>
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
