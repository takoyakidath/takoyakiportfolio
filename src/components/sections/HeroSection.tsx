import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Code2,
  Terminal,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero container" aria-labelledby="hero-title" id="home">
      <div className="hero-topline eyebrow">
        <span>
          <span className="status-dot" /> SOFTWARE ENGINEER
        </span>
        <span>BASED IN CHIBA, JAPAN</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">
            Hi, I’m Ryunosuke Yoda <span>依田 隆之介</span>
          </p>
          <h1 id="hero-title" lang="en">
            Turning
            <br />
            curiosity into
            <br />
            <em>creation.</em>
            <span className="hero-period" aria-hidden="true">
              *
            </span>
          </h1>
          <p className="hero-description">
            「つくってみたい」を、動くかたちに。
            <br />
            Webからインフラまで、好奇心を原動力に
            <br className="desktop-break" />
            ものづくりを楽しむフルスタックエンジニア。
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">
              制作したものを見る <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/takoyakidath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only">（新しいタブで開く）</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-topline">
            <span>THE CREATIVE PROCESS</span>
            <Asterisk size={22} />
          </div>
          <div className="orbital-scene">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="orbit-axis axis-horizontal" />
            <div className="orbit-axis axis-vertical" />
            <div className="creative-orb">
              <div className="orb-grid" />
              <Asterisk strokeWidth={1} />
            </div>
            <div className="orbit-chip chip-code">
              <Code2 size={17} />
              <span>Build with curiosity</span>
            </div>
            <div className="orbit-chip chip-terminal">
              <Terminal size={18} />
              <span>Hello, world.</span>
              <span className="terminal-cursor" />
            </div>
            <div className="avatar-sticker">
              <Image
                src="/takoyaki.png"
                alt=""
                width={100}
                height={100}
                preload
              />
              <span>that’s me ↗</span>
            </div>
            <span className="coordinate coordinate-one">35.60° N</span>
            <span className="coordinate coordinate-two">140.12° E</span>
            <span className="orbit-point point-one" />
            <span className="orbit-point point-two" />
          </div>
          <div className="art-bottomline">
            <span>IDEA → CODE → SOMETHING REAL</span>
            <span>01 / ∞</span>
          </div>
        </div>
      </div>
      <div className="hero-bottomline">
        <span>Always curious. Always building.</span>
        <a href="#about">
          SCROLL TO EXPLORE <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
