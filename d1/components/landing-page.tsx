"use client";

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StarIcon, HomeIcon, BarChartIcon, MessageCircleIcon, UsersIcon, MenuIcon, XIcon } from "lucide-react"

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#" className="flex items-center">
                <HomeIcon className="h-8 w-8 text-teal-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">Dorsi</span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button
                variant="ghost"
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link href="#how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Testimonials
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button variant="outline" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-teal-600 bg-white hover:bg-teal-50">
                Sign in
              </Button>
              <Button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <HomeIcon className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="-mr-2">
                    <Button
                      variant="ghost"
                      className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="#features" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Features
                    </Link>
                    <Link href="#how-it-works" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      How It Works
                    </Link>
                    <Link href="#testimonials" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Testimonials
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                    Sign up
                  </Button>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing user?&apos;
                    <Link href="#" className="text-teal-600 hover:text-teal-500">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="pt-10 sm:pt-16 lg:pt-24 lg:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Revolutionizing</span>
                  <span className="block text-teal-600">Long-Term Rentals</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Dorsi is the dedicated platform for mutual ratings in long-term rentals. Enhance your rental
                  experience with transparent metrics and improved communication.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <form action="#" method="POST" className="mt-3 sm:flex">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:flex-1"
                      placeholder="Enter your email"
                    />
                    <Button type="submit" className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                      Get started
                    </Button>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">
                    We care about the protection of your data. Read our{' '}
                    <Link href="#" className="font-medium text-gray-900 underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need for better rentals
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Dorsi provides a comprehensive set of tools to improve your long-term rental experience.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <StarIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Focused Ratings</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our platform is specifically designed for long-term rental ratings, providing relevant and actionable insights.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <BarChartIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Transparent Metrics</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Access detailed analytics and reporting to better understand your ratings and feedback.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <MessageCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Enhanced Communication</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Integrated features for seamless communication and efficient handling of maintenance requests.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <UsersIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Local Community</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Connect with local forums and groups to share experiences and build a supportive rental community.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">How Dorsi Works</h2>
              <p className="mt-4 text-lg text-gray-500">
                Get started with Dorsi in just a few simple steps and transform your rental experience.
              </p>
            </div>
            <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
              {[
                { title: "Sign Up", description: "Create your account as a tenant or landlord." },
                { title: "Connect", description: "Link with your rental partners and start communicating." },
                { title: "Rate & Improve", description: "Provide and receive feedback to enhance your rental experience." },
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="absolute h-full w-0.5 bg-gray-200 left-8 top-0" />
                  <div className="relative flex items-start">
                    <span className="h-16 w-16 rounded-full border-2 border-teal-500 bg-white flex items-center justify-center text-teal-500 text-xl font-bold">
                      {index + 1}
                    </span>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{step.description}</p>
                    </div>
                  </div>
                </div>
              
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
              <p className="mt-4 text-lg text-gray-500">
                Don&apos;t just take our word for it — hear from some of our satisfied users.
              </p>
            </div>
            <div className="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
              {[
                { name: "Sarah T.", role: "Landlord", quote: "Dorsi has made it so much easier to find reliable tenants. The transparent ratings are a game-changer!" },
                { name: "Mike R.", role: "Tenant", quote: "As a tenant, I love how easy it is to communicate with my landlord through the app. It&apos;s streamlined everything!" },
                { name: "Lisa M.", role: "Property Manager", quote: "The local community features have helped me connect with other landlords in my area. It&apos;s been invaluable!" },
              ].map((testimonial) => (
                <div key={testimonial.name} className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <blockquote className="text-base text-gray-500">
                      <p>&quot;{testimonial.quote}&quot;</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50">
                  Get started
                </Button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-800">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 Dorsi, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}