'use client';

import Image from 'next/image';

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-white py-24 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <form
          action="https://formsubmit.co/udit.aswal37@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-2 w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-16 flex justify-center space-x-12">
        {/* Gmail */}
        <a
          href="mailto:udit.aswal37@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center p-3 shadow-lg transition-transform transform group-hover:scale-110 group-hover:shadow-blue-400/50">
            <Image src="/logo/gmail.png" alt="Gmail" width={48} height={48} />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/uditaswal"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center p-3 shadow-lg transition-transform transform group-hover:scale-110 group-hover:shadow-blue-400/50">
            <Image src="/logo/linkedin.png" alt="LinkedIn" width={48} height={48} />
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://www.github.com/uditaswal"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center p-3 shadow-lg transition-transform transform group-hover:scale-110 group-hover:shadow-purple-400/50">
            <Image src="/logo/github.svg" alt="GitHub" width={48} height={48} />
          </div>
        </a>
      </div>
    </div>
  );
}
