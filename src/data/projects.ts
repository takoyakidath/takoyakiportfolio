export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "EarthRader",
    description:
      "日本各地の地震情報を、ひと目でわかる地図に。Next.jsとLeafletで、震源・規模などの情報を直感的に確認できるWebアプリケーション。",
    image: "/earthrader.png",
    imageAlt:
      "EarthRaderの画面。日本地図上の震源と、地震の規模・深さを一覧で表示。",
    tags: ["TypeScript", "Next.js", "Leaflet"],
    githubUrl: "https://github.com/takoyakidath/earthradar",
    demoUrl: "https://earthrader.pkopko.jp",
  },
  {
    title: "Triplewin",
    description:
      "シンプルだからこそ、もう一度遊びたくなる。Next.js・Tailwind CSS・shadcn/uiでつくった、ブラウザで楽しめる三目並べゲーム。",
    image: "/triplewin.png",
    imageAlt: "Triplewinの三目並べ。赤いコマが横一列に並んだゲーム画面。",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/takoyakidath/Triplewin",
    demoUrl: "https://triplewin.pkopko.jp",
  },
];
