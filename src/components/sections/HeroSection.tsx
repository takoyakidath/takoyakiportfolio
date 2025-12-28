import Image from "next/image";
import { ScrollDown } from "../ScrollDown";

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src="/takoyaki.png" alt="Takoyaki Icon" width={200} height={200} />
        <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Ryunosuke Yoda</div>
        <div className="text-base md:text-xl lg:text-2xl font-bold text-gray-400">
          Software Engineer
        </div>
      </div>
      <ScrollDown />
    </div>
  );
}

