"use client";

import Image from "next/image";

export default function Certificates() {
  return (
    <section id="achievements" className="py-14 bg-gray-900 w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
        Honors And Awards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Certificate 2023 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-2">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/certificates/Certificate Of Recognition 2023.jpg"
              alt="Certificate Of Recognition 2023"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificates Of Recognition: Rising Star Mar&apos;23
            </p>
          </div>
        </div>

        {/* Certificate 2024 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-2">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/certificates/Certificate Of Recognition 2024.jpg"
              alt="Certificate Of Recognition 2024"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition: Star Performer Mar&apos;24
            </p>
          </div>
        </div>

        {/* Certificate 2025 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-2">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/certificates/Certificate Of Recognition 2025.png"
              alt="Certificate Of Recognition 2025"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition: HCL ERS Star Champion Mar&apos;25
            </p>
          </div>
        </div>

        {/* Innovation Champion — June 2026 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-1">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/certificates/Certificate Of Recognition 2026 June.png"
              alt="Certificate of Recognition: HCL Innovation Champion, June 2026"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition: HCL Innovation Champion Jun&apos;26
            </p>
          </div>
        </div>

        {/* Innovation Champion — December 2025 */}
        <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-1">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/certificates/Certificate Of Recognition 2025 December.png"
              alt="Certificate of Recognition: HCL Innovation Champion, December 2025"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <p className="text-white text-center font-semibold">
              Certificate Of Recognition: HCL Innovation Champion Dec&apos;25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
