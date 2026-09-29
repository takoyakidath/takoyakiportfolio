export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "EarthRader",
    description:
      "EarthRader is a web application that provides real-time earthquake information in Japan. Built with Next.js and Leaflet, it offers a user-friendly interface to stay informed about seismic activities.",
    image: "/earthrader.png",
    imageAlt: "Earthrader",
    tags: ["TypeScript", "Next.js", "Leaflet"],
    githubUrl: "https://github.com/takoyakidath/earthradar",
    demoUrl: "https://earthrader.pkopko.jp",
  },
  {
    title: "Triplewin",
    description:
      "Triplewin is a web application built with Next.js, Tailwind CSS, and Shadcn/ui.",
    image: "/triplewin.png",
    imageAlt: "Triplewin",
    tags: ["Nextjs", "Tailwindcss", "Shadcn/ui"],
    githubUrl: "https://github.com/takoyakidath/Triplewin",
    demoUrl: "https://triplewin.pkopko.jp",
  },
  {
    title: "OKANELIFE",
    description:
      "OKANELIFE is a money lifelog app that helps you keep a running record of how much you've earned over your life, so you can look back on it later.",
    image: "/okanelife.png",
    imageAlt: "OKANELIFE",
    tags: ["PHP", "Life Log"],
    githubUrl: "https://github.com/takoyakidath/OKANELIFE",
    demoUrl: "https://okanelife.pkopko.jp",
  },
  {
    title: "ワダイ (Wadai)",
    description:
      "Wadai is a conversation topic gacha - stuck for something to talk about? Pick who you're with and get a random topic to break the ice.",
    image: "/wadai.png",
    imageAlt: "Wadai",
    tags: ["PHP", "Web App"],
    githubUrl: "https://github.com/takoyakidath/wadai",
    demoUrl: "https://wadai.pkopko.jp",
  },
  {
    title: "Console Typer for Proxmox VE",
    description:
      "A Chrome extension that types saved text and IP configs into Proxmox VE's noVNC console as real keystrokes, for consoles where copy & paste doesn't work.",
    image: "/console-typer-for-proxmox.png",
    imageAlt: "Console Typer for Proxmox VE",
    tags: ["Chrome Extension", "JavaScript"],
    githubUrl: "https://github.com/takoyakidath/console-typer-for-proxmox",
  },
];
