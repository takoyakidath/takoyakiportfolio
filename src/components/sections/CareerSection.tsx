import { ArrowDown, ArrowUpRight } from "lucide-react";

const recentCareer = [
  {
    date: "2026.04",
    iso: "2026-04",
    title: "N高等学校に入学",
    detail: "学校法人角川ドワンゴ学園 N高等学校",
    category: "EDUCATION",
  },
  {
    date: "2026.04",
    iso: "2026-04",
    title: "磁石祭 ものづくり発表会 登壇・MC",
    detail: "ニコニコ超会議で、ものづくりの楽しさを共有。",
    category: "EVENT",
  },
  {
    date: "2026.02",
    iso: "2026-02",
    title: "学内プログラミングコンテスト 優秀賞",
    detail: "日々の学びを、ひとつの成果に。",
    category: "AWARD",
  },
  {
    date: "2025.12",
    iso: "2025-12",
    title: "Qiita Advent Calendar 完走賞",
    detail: "2024年・2025年の2年連続で受賞。",
    category: "WRITING",
  },
];

const earlierCareer = [
  {
    date: "2025.10",
    iso: "2025-10",
    title: "学内プログラミングコンテスト 健闘賞",
    detail: "プログラミングへの挑戦。",
    category: "AWARD",
  },
  {
    date: "2025.04",
    iso: "2025-04",
    title: "学生団体Nullerに所属 / Uniproject役員に就任",
    detail: "仲間とともに、活動の幅を広げる。",
    category: "COMMUNITY",
  },
  {
    date: "2024.12",
    iso: "2024-12",
    title: "Qiita Advent Calendar 完走賞",
    detail: "技術の学びを記事として発信。",
    category: "WRITING",
  },
  {
    date: "2023.04",
    iso: "2023-04",
    title: "公立中学校・N中等部に入学",
    detail: "2026年3月まで在学。地域ボランティア団体での活動も開始。",
    category: "EDUCATION",
  },
  {
    date: "2017.04",
    iso: "2017-04",
    title: "公立小学校に入学",
    detail: "2023年3月まで在学。",
    category: "EDUCATION",
  },
  {
    date: "2010.10.05",
    iso: "2010-10-05",
    title: "千葉県で生まれる",
    detail: "ここから、好奇心の旅がはじまる。",
    category: "LIFE",
  },
];

function CareerItem({ item }: { item: (typeof recentCareer)[number] }) {
  return (
    <li className="career-item">
      <time dateTime={item.iso}>{item.date}</time>
      <div className="career-content">
        <span className="career-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </div>
      <ArrowUpRight size={19} aria-hidden="true" />
    </li>
  );
}

export function CareerSection() {
  return (
    <section
      id="career"
      className="career-section"
      aria-labelledby="career-title"
    >
      <div className="container section">
        <div className="section-label">
          <span>04 / JOURNEY</span>
          <span>一歩ずつ、その先へ。</span>
        </div>
        <div className="career-layout">
          <div className="career-intro">
            <h2 id="career-title" className="section-title" lang="en">
              Still learning.
              <br />
              <em>Still growing.</em>
            </h2>
            <p className="section-description">
              学ぶ、つくる、伝える。
              <br />
              小さな挑戦を積み重ねてきた記録。
            </p>
            <span className="journey-mark" aria-hidden="true">
              ↗
            </span>
          </div>
          <div>
            <ol className="career-list">
              {recentCareer.map((item) => (
                <CareerItem key={`${item.date}-${item.title}`} item={item} />
              ))}
            </ol>
            <details className="career-history">
              <summary>
                <span className="history-closed">
                  これまでの歩みをもっと見る
                </span>
                <span className="history-open">これまでの歩みを閉じる</span>
                <ArrowDown size={16} aria-hidden="true" />
              </summary>
              <ol className="career-list">
                {earlierCareer.map((item) => (
                  <CareerItem key={`${item.date}-${item.title}`} item={item} />
                ))}
              </ol>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
