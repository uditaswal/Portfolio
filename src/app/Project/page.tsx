export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        🚀 Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

   {/* Care Plus Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-green-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">CarePlus: Appointment Management System</h3>
          <p className="text-gray-400 mb-6 text-center">
          An Appointment Management System built with Next.js and hosted on Azure Container Service. 
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

          <a
            href="https://careplus-eze4eehwdhdvh2dv.centralindia-01.azurewebsites.net/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Checkout live site  
          </a>
        </div>


        {/* Snake Game Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-green-400/50 transition flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">🐍 Snake Game</h3>
          <p className="text-gray-400 mb-6 text-center">
            A classic Snake Game built using pure HTML, CSS, and JavaScript. Simple, fast, and nostalgic!
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

          <a
            href="https://uditaswal.github.io/JS-SnakeGame/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Play Now 🎮
          </a>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-white mb-2">Coming Soon 🚧</h3>
          <p className="text-gray-400">More exciting projects on the way!</p>
        </div>

      </div>
    </section>
  );
}
