import { ScrollDown } from "../ScrollDown";

export function AboutSection() {
  return (
    <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 lg:gap-24 w-full max-w-7xl">
        <div className="text-4xl md:text-6xl lg:text-8xl font-bold">About me</div>
        <div className="relative flex flex-col gap-4 md:gap-6 text-lg md:text-xl lg:text-2xl pl-6 md:pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400"></div>
          <div className="text-base">Takoyakidath</div>
          <div className="-mt-6 text-3xl md:text-4xl lg:text-5xl font-bold">Ryunosuke Yoda</div>
          <div>Fullstack Engineer</div>
          <div>From: Chiba Japan</div>
          <div>Born: October 5th, 2010</div>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
}

