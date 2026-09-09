export interface Skill {
  name: string;
  percentage: number;
}

export const skills: Skill[] = [
  { name: "Linux", percentage: 0.9 },
  { name: "TypeScript", percentage: 0.85 },
  { name: "Next.js", percentage: 0.8 },
  { name: "Kubernetes", percentage: 0.5 },
  { name: "Python", percentage: 0.3 },
  { name: "React Native", percentage: 0.5 },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "アイデアを、触れられる体験に。",
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Infrastructure",
    description: "サービスを支える、確かな土台。",
    skills: ["Linux", "Kubernetes"],
  },
  {
    title: "Exploring",
    description: "次のものづくりへ、学びを広げる。",
    skills: ["Python", "React Native"],
  },
];
