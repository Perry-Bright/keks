import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function Founder() {
  const { t } = useLanguage();

  return (
    <section
      id="founder"
      className="py-24 bg-stone-50 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-botanical/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <FadeInView>
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </FadeInView>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-botanical/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-botanical/20 rounded-full"></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeInView delay={0.2}>
              <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-8 tracking-tighter">
                {t("founderTitle")}
              </h2>
            </FadeInView>

            <FadeInView delay={0.4}>
              <div className="relative mb-10">
                <span className="absolute -top-10 -left-6 text-8xl text-botanical/20 font-serif leading-none">
                  "
                </span>
                <p className="text-xl md:text-2xl text-stone-800 font-serif italic leading-relaxed relative z-10">
                  {t("founderQuote")}
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.6}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-botanical"></div>
                <div>
                  <h4 className="font-sans font-bold text-xl text-stone-900">
                    {t("founderName")}
                  </h4>
                  <p className="text-sm font-semibold uppercase tracking-widest text-botanical/80 mt-1">
                    {t("founderRole")}
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
