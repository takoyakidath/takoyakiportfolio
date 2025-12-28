import Image from "next/image";
import { ChevronDown, Github, ExternalLink, Mail, Twitter } from 'lucide-react';

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
          <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.85)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold">85%</span>
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">Linux</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.80)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold">80%</span>
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold">75%</span>
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.70)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold">70%</span>
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.65)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold">65%</span>
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">Python</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.90)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold">90%</span>
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-semibold">React Native</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-7xl">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Projects</div>
          <div className="w-full max-w-4xl border-b-2 border-gray-400"></div>
          <div className="w-full max-w-6xl overflow-x-auto">
            <div className="flex gap-6 md:gap-8 pb-4">
              <div className="group relative p-6 md:p-8 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 shrink-0 w-80 md:w-96">
                <div className="mb-4">
                  <Image src="/takoyaki.png" alt="Project 1" width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Project 1</h3>
                <p className="text-base md:text-lg text-gray-400 mb-4">
                  Description of the project goes here. This is a sample project card.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">TypeScript</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Next.js</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">React</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
              <div className="group relative p-6 md:p-8 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 shrink-0 w-80 md:w-96">
                <div className="mb-4">
                  <Image src="/takoyaki.png" alt="Project 2" width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Project 2</h3>
                <p className="text-base md:text-lg text-gray-400 mb-4">
                  Description of the project goes here. This is a sample project card.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Python</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">FastAPI</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Docker</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
              <div className="group relative p-6 md:p-8 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 shrink-0 w-80 md:w-96">
                <div className="mb-4">
                  <Image src="/takoyaki.png" alt="Project 3" width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Project 3</h3>
                <p className="text-base md:text-lg text-gray-400 mb-4">
                  Description of the project goes here. This is a sample project card.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">React Native</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">TypeScript</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Expo</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
              <div className="group relative p-6 md:p-8 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 shrink-0 w-80 md:w-96">
                <div className="mb-4">
                  <Image src="/takoyaki.png" alt="Project 4" width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Project 4</h3>
                <p className="text-base md:text-lg text-gray-400 mb-4">
                  Description of the project goes here. This is a sample project card.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Kubernetes</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Go</span>
                  <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded">Linux</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-7xl">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Contact</div>
          <div className="w-full max-w-4xl border-b-2 border-gray-400"></div>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 text-center">
              Let's get in touch!
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <a 
                href="mailto:takoyakidath@gmail.com" 
                className="flex flex-col items-center gap-3 p-4 md:p-6 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 group"
              >
                <Mail className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span className="text-base md:text-lg lg:text-xl font-semibold">Email</span>
              </a>
              <a 
                href="https://github.com/takoyakidath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 md:p-6 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 group"
              >
                <Github className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span className="text-base md:text-lg lg:text-xl font-semibold">GitHub</span>
              </a>
              <a 
                href="https://twitter.com/takoyakidath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 md:p-6 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 group"
              >
                <Twitter className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span className="text-base md:text-lg lg:text-xl font-semibold">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <div className="text-xs">
            Copyright © 2025 Ryunosuke Yoda. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
