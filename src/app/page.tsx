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
          <div className="w-full max-w-4xl flex flex-col gap-6 md:gap-8">
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">React</span>
                <span className="text-base md:text-lg text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                <div className="bg-gray-600 h-3 md:h-4 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">TypeScript</span>
                <span className="text-base md:text-lg text-gray-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                <div className="bg-gray-600 h-3 md:h-4 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">Next.js</span>
                <span className="text-base md:text-lg text-gray-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                <div className="bg-gray-600 h-3 md:h-4 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">Node.js</span>
                <span className="text-base md:text-lg text-gray-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                <div className="bg-gray-600 h-3 md:h-4 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">Python</span>
                <span className="text-base md:text-lg text-gray-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                <div className="bg-gray-600 h-3 md:h-4 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold">JavaScript</span>
                <span className="text-base md:text-lg text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
                <div className="bg-gray-600 h-3 md:h-4 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
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
