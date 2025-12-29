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
    title: 'EarthRader',
    description:
      'EarthRader is a web application that provides real-time earthquake information in Japan. Built with Next.js and Leaflet, it offers a user-friendly interface to stay informed about seismic activities.',
    image: '/earthrader.png',
    imageAlt: 'Earthrader',
    tags: ['TypeScript', 'Next.js', 'Leaflet'],
    githubUrl: 'https://github.com/takoyakidath/earthradar',
    demoUrl: 'https://earthrader.pkopko.jp',
  },
  {
    title: 'Triplewin',
    description:
      'EarthRader is a web application that provides real-time earthquake information in Japan. Built with Next.js and Leaflet, it offers a user-friendly interface to stay informed about seismic activities.',
    image: '/triplewin.png',
    imageAlt: 'Triplewin',
    tags: ['Nextjs', 'Tailwindcss', 'Shadcn/ui'],
    githubUrl: 'https://github.com/takoyakidath/Triplewin',
    demoUrl: 'https://triplewin.pkopko.jp',
  },
];

