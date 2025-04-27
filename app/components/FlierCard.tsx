import { CheckCircle2 } from 'lucide-react'
import { GetStartedButton } from './GetStartedButton'

interface FlierCardProps {
  title: string;
  description: string;
  price: string;
  priceDetails: string;
  features: string[];
}

const FlierCard = ({ title, description, price, priceDetails, features }: FlierCardProps) => {
  return (
    <div className="border-2 border-[#0649E7] rounded-lg p-6 w-full md:w-[40%] flex flex-col">
      <h3 className="text-xl font-bold text-[#0649E7] mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>

      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold text-[#0649E7]">{price}</span>
        <span className="text-lg ml-2 text-[#0649E7]">{priceDetails}</span>
      </div>

      <div className="my-4 border border-gray-200"></div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <GetStartedButton />
      </div>
    </div>
  )
}

export default FlierCard;
