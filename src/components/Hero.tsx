import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <img
          src="/hero.png"
          alt="Keks Cafe Interior"
          className="w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        {/* Subtle gradient to blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <FadeInView>
          <div className="inline-block bg-botanical/20 border border-botanical/50 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            {t("discountBadge")}
          </div>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="flex justify-center items-center mb-6 px-4">
            <img
              src="/logo.png"
              alt="KEKC Logo"
              className="w-64 md:w-96 lg:w-[400px] h-auto drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] object-contain"
            />
          </div>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="text-lg md:text-xl text-stone-100 max-w-md mx-auto mb-8 leading-relaxed opacity-90">
            {t("heroSubtitle")}
          </p>
        </FadeInView>

        <FadeInView delay={0.6}>
          <a
            href="https://eda.yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-botanical text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            <span className="uppercase tracking-widest font-bold text-sm">
              {t("orderDelivery")}
            </span>
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-stone-200">
            <div className="w-8 h-[1px] bg-stone-50/50"></div>
            <span>{t("deliveryPromo")}</span>
            <div className="w-8 h-[1px] bg-stone-50/50"></div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
