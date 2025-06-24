'use client';

import Image from 'next/image';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-900 w-full">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        📜 Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {/* AZ-900 */}
        <a
          href="https://learn.microsoft.com/en-us/users/uditaswal-6053/credentials/7048a4576dc066d0?ref=https%3A%2F%2Fwww.linkedin.com%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-2"
        >
          <div className="relative w-full h-60">
            <Image
              src="/certificates/az_900.png"
              alt="AZ-900: Azure Fundamentals"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              AZ-900: Azure Fundamentals
            </p>
          </div>
        </a>

        {/* AI-900 */}
        <a
          href="https://learn.microsoft.com/en-us/users/uditaswal-6053/credentials/860c61dbfc03115c?ref=https%3A%2F%2Fwww.linkedin.com%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
        >
          <div className="relative w-full h-60">
            <Image
              src="/certificates/ai_900.png"
              alt="AI-900 Azure AI Fundamentals"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              AI-900 Azure AI Fundamentals
            </p>
          </div>
        </a> 
      
      
       {/* AZ-204 */}
        <a
          href="https://learn.microsoft.com/en-us/users/uditaswal-6053/credentials/certification/azure-developer?tab=credentials-tab"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
        >
          <div className="relative w-full h-60">
            <Image
              src="/certificates/az_204.png"
              alt="AZ-204 Azure Developer Associate"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              AZ-204 Azure Developer Associate
            </p>
          </div>
        </a> 

      {/* </div> */}
      
      </div>


       
    </section>
  );
}
