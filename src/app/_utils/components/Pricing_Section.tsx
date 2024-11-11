import React from 'react'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import ShinyButton from '@/components/magicui/shiny-button'

export default function PricingSection() {
  return (
    <div className="my-[80px] lg:my-[120px] px-5 md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
        <div className="flex justify-center items-center">
          <ShinyButton text="Pricing" className="mb-[px] md:mb-0" />
        </div>
          <h2 className="pt-2 text-[28px] md:text-[36px] pb-[25px] font-medium bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">Simple pricing for everyone.</h2>

          <p className="text-[14px] md:text-base max-w-2xl mx-auto text-gray-500 ">
            Choose an <span className="font-bold">affordable plan</span> {`that's`} packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <span className="mr-3 text-[14px] md:text-base">Annual</span>
          <Switch />
          <span className="ml-3 flex items-center">
            <span className='text-xs md:text-base'>2 MONTHS FREE</span>
            <span className="bg-green-500 text-black text-xs px-2 py-1 rounded ml-2">SAVE 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Basic',
              description: 'A basic plan for startups and individual users',
              price: '$10',
              features: ['AI-powered analytics', 'Basic support', '5 projects limit', 'Access to basic AI tools'],
            },
            {
              name: 'Premium',
              description: 'A premium plan for growing businesses',
              price: '$20',
              features: ['Advanced AI insights', 'Priority support', 'Unlimited projects', 'Access to all AI tools', 'Custom integrations'],
              highlight: true,
            },
            {
              name: 'Enterprise',
              description: 'An enterprise plan with advanced features for large organizations',
              price: '$50',
              features: ['Custom AI solutions', '24/7 dedicated support', 'Unlimited projects', 'Access to all AI tools', 'Custom integrations', 'Data security and compliance'],
            },
            {
              name: 'Ultimate',
              description: 'The ultimate plan with all features for industry leaders',
              price: '$80',
              features: ['Bespoke AI development', 'White-glove support', 'Unlimited projects', 'Priority access to new AI tools', 'Custom integrations', 'Highest data security and compliance'],
            },
          ].map((plan, index) => (
            <div key={index} className={`rounded-lg p-6 ${plan.highlight ? 'border-2 border-yellow-500' : 'border border-gray-700'}`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-4">
                {plan.price} <span className="text-sm font-normal text-gray-400">/ month</span>
              </div>
              <Button className="w-full mb-6 dark:bg-white dark:text-primary hover:text-primary">Subscribe</Button>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}