import { Laptop, Dog, Wheat } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Laptop,
      title: t("laptopFriendly"),
      desc: t("laptopDesc"),
    },
    {
      icon: Dog,
      title: t("dogFriendly"),
      desc: t("dogDesc"),
    },
    {
      icon: Wheat,
      title: t("artisanal"),
      desc: t("artisanalDesc"),
    },
  ];

  return (
    <section id="about" className="py-12 bg-stone-50">
      <div className="container mx-auto px-10 max-w-7xl">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-serif italic text-[19px] text-stone-900 mb-4 leading-tight">
              {t("heroDescription")}
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <div key={idx}>
              <FadeInView delay={0.2 + idx * 0.1}>
                <div className="flex flex-col justify-center items-center text-center p-6 rounded-[24px] bg-white transition-transform hover:-translate-y-1 duration-300 h-full">
                  <div className="text-botanical mb-4">
                    <item.icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif italic text-xl text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] opacity-60 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </FadeInView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
