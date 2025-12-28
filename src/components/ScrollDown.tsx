import { ChevronDown } from "lucide-react";

export function ScrollDown() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold">
      <span className="text-xs">Scroll down</span>
      <ChevronDown className="animate-bounce" />
    </div>
  );
}
