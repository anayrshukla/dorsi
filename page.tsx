import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StarIcon, MessageCircleIcon, BarChartIcon, UsersIcon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-teal-600 text-white">
        <Link className="flex items-center justify-center" href="#">
          <StarIcon className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Dorsi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-teal-50 rounded-b-3xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-teal-800">
                  Revolutionizing Long-Term Rentals
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Dorsi is the dedicated platform for mutual ratings in long-term rentals. Enhance your rental
                  experience with transparent metrics and improved communication.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-teal-800">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <StarIcon className="h-12 w-12 mb-4 text-teal-600" />
                <h3 className="text-lg font-bold text-teal-800">Focused Ratings</h3>
                <p className="text-sm text-gray-600">
                  Dedicated platform for mutual ratings designed specifically for long-term rentals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChartIcon className="h-12 w-12 mb-4 text-teal-600" />
                <h3 className="text-lg font-bold text-teal-800">Transparent Metrics</h3>
                <p className="text-sm text-gray-600">
                  Detailed analytics and reporting to help understand ratings and feedback.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageCircleIcon className="h-12 w-12 mb-4 text-teal-600" />
                <h3 className="text-lg font-bold text-teal-800">Enhanced Communication</h3>
                <p className="text-sm text-gray-600">
                  Integrated features for ongoing communication and maintenance requests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UsersIcon className="h-12 w-12 mb-4 text-teal-600" />
                <h3 className="text-lg font-bold text-teal-800">Local Community</h3>
                <p className="text-sm text-gray-600">
                  Local forums and groups to discuss experiences and build community.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50 rounded-t-3xl rounded-b-3xl">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-teal-800">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-3xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 text-lg font-bold text-teal-800">Sign Up</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Create your account as a tenant or landlord.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-3xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 text-lg font-bold text-teal-800">Connect</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Link with your rental partners and start communicating.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-3xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 text-lg font-bold text-teal-800">Rate & Improve</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Provide and receive feedback to enhance your rental experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-teal-800">What Our Users Say</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <img
                  alt="User"
                  className="rounded-full"
                  height="80"
                  src="/placeholder.svg?height=80&width=80"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="mt-4 text-lg font-bold text-teal-800">Sarah T.</p>
                <p className="mt-2 text-sm text-gray-600">
                  "Dorsi has made it so much easier to find reliable tenants. The transparent ratings are a game-changer!"
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  alt="User"
                  className="rounded-full"
                  height="80"
                  src="/placeholder.svg?height=80&width=80"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="mt-4 text-lg font-bold text-teal-800">Mike R.</p>
                <p className="mt-2 text-sm text-gray-600">
                  "As a tenant, I love how easy it is to communicate with my landlord through the app. It's streamlined everything!"
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  alt="User"
                  className="rounded-full"
                  height="80"
                  src="/placeholder.svg?height=80&width=80"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <p className="mt-4 text-lg font-bold text-teal-800">Lisa M.</p>
                <p className="mt-2 text-sm text-gray-600">
                  "The local community features have helped me connect with other landlords in my area. It's been invaluable!"
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50 rounded-t-3xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-teal-800">
                  Ready to Transform Your Rental Experience?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Dorsi today and start building better rental relationships with transparent ratings and enhanced communication.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-teal-600 text-white">
        <p className="text-xs">© 2024 Dorsi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}