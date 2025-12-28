import { Mail, Github, Twitter } from 'lucide-react';

const CONTACT_EMAIL = 'takoyakidath@gmail.com';

interface ContactLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const contactLinks: ContactLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/takoyakidath',
    icon: Github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/takoyakidath',
    icon: Twitter,
  },
];

export function ContactSection() {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-7xl">
        <div className="section-title">Contact</div>
        <div className="section-divider"></div>
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 text-center px-4">
            Let's get in touch!
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="card-hover flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 group"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Email</span>
            </a>
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 group"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center font-bold px-4">
        <div className="text-[10px] sm:text-xs text-center">
          Copyright © 2025 Ryunosuke Yoda. All rights reserved.
        </div>
      </div>
    </div>
  );
}

