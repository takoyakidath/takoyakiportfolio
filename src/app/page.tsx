import Image from "next/image";
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="relative h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <Image src="/takoyaki.png" alt="Takoyaki Icon" width={200} height={200} />
          <div className="text-base md:text-xl lg:text-2xl font-bold">Software Engineer</div>
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Ryunosuke Yoda</div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
          <span className="text-xs">Scroll down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      <div>
        About me
      </div>
    </div>
  );
}
