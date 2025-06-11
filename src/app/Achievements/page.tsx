'use client';

import Image from 'next/image';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-900 w-full">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
         Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
      

        {/* Certificate 2023 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-2">
          <div className="relative w-full h-60">
            <Image
              src="/certificates/Certificate Of Recognition 2023.jpg"
              alt="Certificate Of Recognition 2023"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition 2023 @<a
              href="https://www.hcltech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold "
            >
              HCL Tech
            </a>
            </p>
          </div>
        </div>

        {/* Certificate 2024 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-2">
          <div className="relative w-full h-60">
            <Image
              src="/certificates/Certificate Of Recognition 2024.jpg"
              alt="Certificate Of Recognition 2024"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition 2024 @<a
              href="https://www.hcltech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold "
            >
              HCL Tech
            </a>
            </p>
          </div>
        </div>

        {/* Certificate 2025 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-2">
          <div className="relative w-full h-60">
            <Image
              src="/certificates/Certificate Of Recognition 2025.png"
              alt="Certificate Of Recognition 2025"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition 2025  @<a
              href="https://www.hcltech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold "
            >
              HCL Tech
            </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
