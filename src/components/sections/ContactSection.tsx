import { ArrowUp, ArrowUpRight, Asterisk, Github } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";

const email = "takoyakidath@gmail.com";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-label">
          <span>05 / SAY HELLO</span>
          <span>次のアイデアは、会話から。</span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-title" lang="en">
            Let’s make
            <br />
            <em>something great.</em>
          </h2>
          <Asterisk
            className="contact-asterisk"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
        <div className="contact-bottom">
          <div>
            <p>
              制作のご相談、技術のお話、ちょっとしたご挨拶も。
              <br />
              気軽に声をかけてください。
            </p>
            <div className="email-row">
              <a href={`mailto:${email}`} className="email-link">
                {email}
                <ArrowUpRight size={25} aria-hidden="true" />
              </a>
              <CopyEmailButton email={email} />
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/takoyakidath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} aria-hidden="true" /> GitHub{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">（新しいタブで開く）</span>
            </a>
            <a
              href="https://twitter.com/takoyakidath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="x-icon" aria-hidden="true">
                𝕏
              </span>{" "}
              X / Twitter <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">（新しいタブで開く）</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-wordmark" aria-label="トップへ">
          ry.
        </a>
        <p>© {new Date().getFullYear()} Ryunosuke Yoda</p>
        <span>Built with curiosity, in Japan.</span>
        <a href="#home" className="back-to-top">
          BACK TO TOP <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
