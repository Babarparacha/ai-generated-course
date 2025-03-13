// pages/about.js

import Head from 'next/head'
import Header from '../_component/Header'

export default function About() {
  return (
    <>
    <Header/>
    <Head>
        <title>About Us | AI Course Generator</title>
        <meta name="description" content="About us - AI-driven course generation platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-r from-indigo-100 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We are revolutionizing the world of education with AI-driven course creation, making learning personalized and accessible for everyone.
            </p>
          </div>

          {/* Mission, Innovation, and Team Section */}
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-500">
                Our mission is simple – to leverage AI technology to provide highly personalized learning experiences that help people achieve their educational goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900">AI-Powered Innovation</h2>
              <p className="mt-4 text-gray-500">
                We believe AI can revolutionize education by tailoring courses to individual needs, allowing for dynamic content creation that adapts to learning progress.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900">Our Team</h2>
              <p className="mt-4 text-gray-500">
                Our team is made up of passionate AI experts, educators, and technologists, all working together to bring cutting-edge learning solutions to life.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900">Join Us in Shaping the Future of Learning</h3>
            <p className="mt-6 text-lg text-gray-600">
              We're always looking for innovators who are passionate about combining technology and education to create impactful learning experiences.
            </p>
            <a href="/contact" className="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
