
import { Button } from "@/components/ui/button"

export default function BrandBanner() {
  return (
    <div className="flex h-screen w-full items-center justify-center rounded-bl-[400px] bg-gradient-to-bl flex-1 from-background to-secondary p-8">
      <div className="max-w-md text-center">
        {/* Logo/Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-stone-800 to-gray-700 shadow-xl">
            <Anvil className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">DashForge</h1>

        {/* Tagline */}
        <p className="mb-6 text-lg text-slate-300 leading-relaxed">
          Crafting exceptional digital experiences that inspire and engage your audience.
        </p>

        {/* Decorative Elements */}
        <div className="mb-8 flex justify-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-slate-400 shadow-sm shadow-stone-400/50"></div>
          <div className="h-2 w-2 rounded-full bg-gray-400 shadow-sm shadow-stone-400/50"></div>
          <div className="h-2 w-2 rounded-full bg-slate-400 shadow-sm shadow-stone-400/50"></div>
        </div>

        {/* Call to Action */}
        <Button variant='secondary' className="ring-neutral-500 ring-1 hover:ring-neutral-600">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-pink-500 opacity-10 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-blue-500 opacity-5 blur-lg"></div>
        </div>
      </div>
    </div>
  )
}
