const career = [
  { date: "2010年10月5日", text: "誕生" },
  { date: "2017年4月～2023年3月", text: "公立小学校在学" },
  { date: "2023年4月～2026年3月", text: "公立中学校在学" },
  { date: "2023年4月～2026年3月", text: "学校法人角川ドワンゴ学園N中等部在学" },
  { date: "2023年4月～", text: "千葉県内の地域ボランティア団体に所属" },
    { date: "2024年12月", text: "Qiita Advent Calendar 完走賞受賞" },
  { date: "2025年4月～", text: "学生団体Nullerに所属" },
  { date: "2025年4月～", text: "任意団体Uniprojectの役員に就任" },
  { date: "2025年12月", text: "Qiita Advent Calendar 完走賞受賞" },
  { date: "2026年4月", text: "ニコニコ超会議の磁石祭 ものづくり発表会登壇者" },
  { date: "2025年10月", text: "学内プログラミングコンテスト 健闘賞受賞" },
  { date: "2026年2月", text: "学内プログラミングコンテスト 優秀賞受賞" },
  { date: "2026年4月", text: "ニコニコ超会議の磁石祭 ものづくり発表会MC" },
  { date: "2026年4月～", text: "学校法人角川ドワンゴ学園N高等学校在学中" },
];

export function CareerSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-7xl">
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">
          Career
        </div>
        <div className="w-full max-w-4xl border-b-2 border-gray-400"></div>
        <div className="relative w-full max-w-3xl">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 sm:-translate-x-1/2"></div>
          {career.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={`${item.date}-${item.text}`}
                className={`relative flex pb-6 sm:pb-8 last:pb-0 ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 top-1 w-3 h-3 sm:w-4 sm:h-4 -translate-x-1/2 rounded-full bg-gray-400 z-10"></div>
                <div
                  className={`pl-10 sm:pl-0 sm:w-[calc(50%-2rem)] flex flex-col gap-1 ${
                    isLeft
                      ? "sm:items-end sm:text-right sm:pr-8"
                      : "sm:items-start sm:text-left sm:pl-8"
                  }`}
                >
                  <span className="text-sm sm:text-base text-gray-400 font-medium">
                    {item.date}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-bold">
                    {item.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
