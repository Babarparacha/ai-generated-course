import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-20  lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Generate Ai Course .
        <strong className="font-extrabold text-blue-700 sm:block"> Save Time. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Unlock the power of AI with our comprehensive course—start creating today!
      Transform your ideas into reality with AI-driven solutions
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/sign-up"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero