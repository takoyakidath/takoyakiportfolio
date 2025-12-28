import Image from "next/image";
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="relative h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <Image src="/takoyaki.png" alt="Takoyaki Icon" width={200} height={200} />

          <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Ryunosuke Yoda</div>
          <div className="text-base md:text-xl lg:text-2xl font-bold text-gray-400">Software Engineer</div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 lg:gap-24 w-full max-w-7xl">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold">About me</div>
          <div className="relative flex flex-col gap-4 md:gap-6 text-lg md:text-xl lg:text-2xl pl-6 md:pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400"></div>
            <div className="text-base">Takoyaki</div>
            <div className="-mt-6 text-3xl md:text-4xl lg:text-5xl font-bold">Ryunosuke Yoda</div>
            <div>Fullstack Engineer</div>
            <div>From: Chiba Japan</div>
            <div>Born: October 5th, 2010</div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-7xl">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Skills</div>
          <div className="w-full max-w-4xl border-b-2 border-gray-400"></div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-lg md:text-xl lg:text-2xl">
            <div className="px-4 py-2 bg-gray-100 rounded">React</div>
            <div className="px-4 py-2 bg-gray-100 rounded">TypeScript</div>
            <div className="px-4 py-2 bg-gray-100 rounded">Next.js</div>
            <div className="px-4 py-2 bg-gray-100 rounded">Node.js</div>
            <div className="px-4 py-2 bg-gray-100 rounded">Python</div>
            <div className="px-4 py-2 bg-gray-100 rounded">JavaScript</div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div className="relative h-screen">
        <div >Projects</div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div className="relative h-screen">
        <div>contact</div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
        <div className="text-xs">
        Copyright © 2025 Ryunosuke Yoda. All rights reserved.

      </div>
        </div>
      </div>
    </div>
  );
}
