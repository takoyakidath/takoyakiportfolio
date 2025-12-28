import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-screen px-4">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 relative mb-4 sm:mb-6">
          <Image
            src="/takoyaki.png"
            alt="Takoyaki Icon"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center px-2">
          Ryunosuke Yoda
        </div>
        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-gray-400 mt-2 sm:mt-4">
          Software Engineer
        </div>
      </div>
    </div>
  );
}
