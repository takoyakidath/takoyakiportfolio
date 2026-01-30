"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  // 上（英語名）：一回だけタイプして固定
  const nameText = "Ryunosuke Yoda";
  const [nameDisplayed, setNameDisplayed] = useState("");

  // 下（切り替え）：0=肩書き, 1=漢字
  const rotating = ["Software Engineer", "依田 隆之介"] as const;

  // ✅漢字の表示時間だけ長くする（ms）
  const pauseMsByIndex: Record<number, number> = {
    0: 1200, // Software Engineer 側
    1: 3000, // 依田隆之介 側（長め）
  };

  const [rotIndex, setRotIndex] = useState(0);
  const [rotDisplayed, setRotDisplayed] = useState("");
  const [rotDeleting, setRotDeleting] = useState(false);

  // ① 英語名を一回だけタイプ
  useEffect(() => {
    if (nameDisplayed.length >= nameText.length) return;

    const t = setTimeout(() => {
      setNameDisplayed(nameText.slice(0, nameDisplayed.length + 1));
    }, 90);

    return () => clearTimeout(t);
  }, [nameDisplayed]);

  // ② 下を切り替えタイプ（打つ→待つ→消す→次）
  useEffect(() => {
    if (nameDisplayed.length < nameText.length) return;

    const current = rotating[rotIndex];
    const pauseMs = pauseMsByIndex[rotIndex] ?? 1200;

    const typeSpeed = 80;
    const deleteSpeed = 40;

    let t: ReturnType<typeof setTimeout>;

    if (!rotDeleting) {
      // 打つ
      t = setTimeout(() => {
        const next = current.slice(0, rotDisplayed.length + 1);
        setRotDisplayed(next);

        // 全部打ったら「index別の待ち時間」→削除へ
        if (next.length === current.length) {
          setTimeout(() => setRotDeleting(true), pauseMs);
        }
      }, typeSpeed);
    } else {
      // 消す
      t = setTimeout(() => {
        const next = current.slice(0, Math.max(0, rotDisplayed.length - 1));
        setRotDisplayed(next);

        if (rotDisplayed.length <= 1) {
          setRotDeleting(false);
          setRotIndex((p) => (p + 1) % rotating.length);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(t);
  }, [rotDisplayed, rotDeleting, rotIndex, nameDisplayed]);

  return (
    <div className="relative h-screen px-4">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 relative mb-4 sm:mb-6">
          <Image src="/takoyaki.png" alt="Takoyaki Icon" fill className="object-contain" />
        </div>

        {/* 上：英語名だけタイプ */}
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center px-2">
          {nameDisplayed}
          {nameDisplayed.length < nameText.length && <span className="animate-pulse">|</span>}
        </div>

        {/* 下：肩書き⇄漢字 */}
        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-gray-400 mt-2 sm:mt-4">
          {rotDisplayed}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
}
