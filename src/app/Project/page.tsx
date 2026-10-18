export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-14 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
        🚀 Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Care Plus Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-green-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            CarePlus: Appointment Management System
          </h3>
          <ul className="mb-6 w-full list-disc space-y-2 pl-5 text-left text-gray-400">
              <li>
                Full-stack healthcare appointment management system built with
                Next.js.
              </li>
              <li>
                Allows patients to register, book appointments, and manage their
                scheduled visits.
              </li>
              <li>
                Provides administrative tools for confirming, rescheduling, and
                canceling appointments.
              </li>
              <li>
                Sends real-time SMS notifications and appointment updates.
              </li>
              <li>
                Supports secure document and file uploads through Appwrite.
              </li>
              <li>
                Includes a responsive interface optimized for desktop and mobile
                devices.
              </li>
          </ul>

          {/* Stack icons*/}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Next.js
            </span>
            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Appwrite
            </span>
            <span className="bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-full">
              TypeScript
            </span>
            <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Tailwind Css
            </span>
            <span className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              ShadCN Ui
            </span>
            <span className="bg-amber-900 text-black text-xs font-medium px-3 py-1 rounded-full">
              Azure
            </span>
            <span className="bg-pink-400 text-black text-xs font-medium px-3 py-1 rounded-full">
              Docker
            </span>
            <span className="bg-teal-200 text-black text-xs font-medium px-3 py-1 rounded-full">
              Twilio
            </span>
          </div>

          <div className="flex flex-row justify-center gap-3 flex-wrap">
            <a
              href="https://github.com/uditaswal/CarePlus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition mr-1"
            >
              GitHub 💻
            </a>
            <a
              href="https://careplus-eze4eehwdhdvh2dv.centralindia-01.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Checkout live site (Azure) 🚀
            </a>
            <a
              href="https://care-plus-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Checkout live site (Vercel) 🚀
            </a>
          </div>
        </div>

        {/* URL Shortener Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            🔗 URL Shortener
          </h3>

          <ul className="mb-6 w-full list-disc space-y-2 pl-5 text-left text-gray-400">
              <li>Built with Node.js, Express, MongoDB, and EJS.</li>
              <li>
                Supports custom aliases, optional expiry dates, saved-link
                management, and click tracking.
              </li>
              <li>
                Uses secure cookie-based authentication with server-side session
                invalidation.
              </li>
              <li>
                Includes alias validation, collision handling, rate limiting,
                expiry controls, and safe redirects.
              </li>
              <li>
                Provides an analytics dashboard, API documentation, and rotating
                and stdout logging.
              </li>
              <li>Uses GitHub Actions CI with MongoDB integration tests.</li>
          </ul>

          {/* Stack icons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Node.js
            </span>
            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Express
            </span>
            <span className="bg-yellow-500 text-black text-xs font-medium px-3 py-1 rounded-full">
              MongoDB
            </span>
            <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              EJS
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/uditaswal/url-shortner"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              GitHub 💻
            </a>
            <a
              href="https://url-shortner-ugkr.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Checkout live site (Render) 🚀
            </a>
          </div>
        </div>

        {/* Snake Game Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-green-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            🐍 Snake Game
          </h3>
          <p className="text-gray-400 mb-6 text-center">
            A classic Snake Game built using pure HTML, CSS, and JavaScript.
            Simple, fast, and nostalgic!
          </p>

          {/* Stack icons*/}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              HTML
            </span>
            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              CSS
            </span>
            <span className="bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-full">
              JavaScript
            </span>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/uditaswal/JS-SnakeGame"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              GitHub 💻
            </a>

            <a
              href="https://uditaswal.github.io/JS-SnakeGame/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Play Now 🎮
            </a>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Coming Soon 🚧
          </h3>
          <p className="text-gray-400">More exciting projects on the way!</p>
        </div>
      </div>
    </section>
  );
}
