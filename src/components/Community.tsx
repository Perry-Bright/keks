import { Star } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function Community() {
  const { lang, t } = useLanguage();

  const reviews = [
    {
      text:
        lang === "ru"
          ? "Очень уютная атмосфера, замечательный персонал и самые хрустящие круассаны!"
          : "Very cozy atmosphere, remarkable personnel, and the crunchiest croissants!",
      author: "Дария К.",
      platform: "2GIS",
      rating: 5,
    },
    {
      text:
        lang === "ru"
          ? "Лучший ремесленный хлеб из гречки и вкусный спешелти кофе каждый день."
          : "The best artisanal buckwheat bread and delicious specialty coffee every day.",
      author: "Иван С.",
      platform: "Yandex Maps",
      rating: 5,
    },
    {
      text:
        lang === "ru"
          ? "Идеальное место для удаленки. Розетки у каждого столика, быстрый Wi-Fi и можно с собакой!"
          : "Perfect spot for remote work. Outlets at every table, fast Wi-Fi and it's dog-friendly!",
      author: "Мария В.",
      platform: "Yandex Maps",
      rating: 5,
    },
    {
      text:
        lang === "ru"
          ? "Бамбл с ягодным сиропом — просто пушка. Однозначно рекомендую попробовать, особенно в жару."
          : "Berry Bumble is an absolute bomb. Definitely recommend trying it, especially on a hot day.",
      author: "Алексей М.",
      platform: "2GIS",
      rating: 5,
    },
    {
      text:
        lang === "ru"
          ? "Всегда свежая выпечка по утрам. Завтраки подают весь день, английский сет очень сытный."
          : "Always fresh pastries in the morning. Breakfasts are served all day, the English set is very hearty.",
      author: "Елена П.",
      platform: "Yandex Eda",
      rating: 5,
    },
  ];

  // Duplicate for smooth infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="container mx-auto px-10 max-w-5xl text-center mb-16">
        <FadeInView>
          <h2 className="font-serif italic text-4xl md:text-5xl text-stone-900 mb-6">
            {t("communityTitle")}
          </h2>
          <p className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] opacity-60">
            {lang === "ru" ? "Что говорят наши гости" : "What our guests say"}
          </p>
        </FadeInView>
      </div>

      <div className="relative w-full overflow-hidden mask-edges py-4">
        <div className="flex animate-marquee w-max gap-6 px-3 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedReviews.map((review, i) => (
            <div
              key={i}
              className="bg-stone-50 rounded-[32px] p-8 border border-stone-200 shadow-sm flex flex-col justify-between w-[350px] shrink-0 transition-transform hover:-translate-y-2 duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-botanical gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#5A5A40] font-bold bg-white border border-stone-200 px-3 py-1 rounded-full">
                    {review.platform}
                  </span>
                </div>
                <p className="font-serif italic text-lg text-stone-800 leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold opacity-60 mt-auto">
                – {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
