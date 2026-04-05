export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        🚀 Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Care Plus Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-green-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            CarePlus: Appointment Management System
          </h3>
          <p className="text-gray-400 mb-6 text-center">
            A full-stack healthcare appointment management system that enables
            patients to register, book, and manage appointments with doctors. It
            also provides administrative tools for managing scheduling,
            confirming, and canceling appointments. Built with Next.js, it
            features real-time SMS notifications, a responsive design, and
            secure file uploads via Appwrite.
          </p>

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

          <div className="flex flex-row justify-evenly">
            <a
              href="https://github.com/uditaswal/CarePlus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition mr-1"
            >
              GitHub 💻
            </a>
            <a
              href="https://care-plus-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Checkout live site 🚀
            </a>
          </div>
        </div>

        {/* URL Shortener Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            🔗 URL Shortener
          </h3>

          <p className="text-gray-400 mb-6 text-center">
            A scalable full-stack URL shortener that converts long URLs into
            short, shareable links with fast redirection and efficient storage.
            It includes features like unique link generation, click tracking,
            and basic analytics for monitoring usage. It ensures high
            performance, reliability, and a responsive user experience.
          </p>

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
          <div className="flex gap-3">
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
              Checkout live site 🚀
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
          <div className="flex gap-3">
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
