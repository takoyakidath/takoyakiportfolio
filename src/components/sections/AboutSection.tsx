import { ArrowUpRight, Code2, HeartHandshake, MapPin } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section container about-section"
      aria-labelledby="about-title"
    >
      <div className="section-label">
        <span>01 / ABOUT</span>
        <span>少しだけ、自己紹介。</span>
      </div>
      <div className="about-grid">
        <div>
          <h2 id="about-title" className="section-title" lang="en">
            A curious mind.
            <br />
            <em>A builder at heart.</em>
          </h2>
          <div className="profile-signature">
            <Image
              src="/takoyaki.png"
              alt="たこやきのプロフィールアイコン"
              width={54}
              height={54}
            />
            <div>
              <span>Ryunosuke Yoda</span>
              <span>@takoyakidath</span>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            仕組みを知ること。手を動かすこと。
            <br />
            その先に、誰かの役に立つものを。
          </p>
          <p>
            千葉県出身の依田隆之介です。N高等学校で学びながら、Next.js・TypeScriptを使ったWebアプリケーションから、Linux・Kubernetesを使ったインフラまで、幅広い技術に触れています。
          </p>
          <p>
            個人開発だけでなく、学生団体や地域のボランティアにも参加。人とつながり、アイデアを交わしながら、自分にできることを少しずつ広げています。
          </p>
          <div className="about-facts">
            <span>
              <MapPin size={15} aria-hidden="true" /> Chiba, Japan
            </span>
            <span>
              <Code2 size={15} aria-hidden="true" /> Fullstack Engineer
            </span>
            <span>
              <HeartHandshake size={15} aria-hidden="true" /> Community minded
            </span>
          </div>
          <a href="#career" className="text-link">
            これまでの歩み <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
