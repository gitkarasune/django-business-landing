import React from 'react'
import { FaPython, FaDatabase, FaRocket } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Django() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-8">
          <SiDjango className="text-green-500 text-6xl" />
        </div>
        <h1 className="text-5xl font-bold text-white mb-6">
          Build Powerful Web Applications with Django
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          The web framework for perfectionists with deadlines
        </p>
        <Link to={"https://www.djangoproject.com/"}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition duration-300">
            <FaPython className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Python Powered</h3>
            <p className="text-gray-400">
              Leverage the simplicity and power of Python to build your next web application
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition duration-300">
            <FaDatabase className="text-4xl text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Built-in ORM</h3>
            <p className="text-gray-400">
              Interact with your database using Django's powerful Object-Relational Mapping
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition duration-300">
            <FaRocket className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Rapid Development</h3>
            <p className="text-gray-400">
              Build applications quickly with Django's batteries-included philosophy
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join millions of developers who trust Django to create secure, scalable, and maintainable web applications
        </p>
        <div className="space-x-4">
          <Link to={"https://docs.djangoproject.com/en/5.1/"}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Documentation
          </button>
          </Link>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Tutorial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© 2024 Django. The Web framework for perfectionists with deadlines.</p>
      </footer>
    </div>
  )
}

export default Django