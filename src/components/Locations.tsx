import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function Locations() {
  const { lang, t } = useLanguage();

  return (
    <section id="locations" className="py-24 bg-stone-50">
      <div className="container mx-auto px-10 max-w-7xl">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl text-stone-900 mb-6">
              {t("locationsTitle")}
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <FadeInView delay={0.2} className="h-full">
            <div className="flex flex-col h-full border-t border-stone-200 pt-8 group">
              <h3 className="text-[10px] font-bold text-botanical uppercase tracking-widest mb-4">
                {t("branch1Name")}
              </h3>
              <h4 className="font-serif italic text-3xl text-stone-900 mb-4">
                {t("branch1")}
              </h4>
              <div className="flex items-start gap-4 mb-4">
                <p className="text-sm font-semibold">{t("branch1Address")}</p>
              </div>
              <div className="mt-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] mb-2 opacity-60">
                  {lang === "ru" ? "Часы работы" : "Hours"}
                </p>
                <p className="text-xs text-stone-900 leading-relaxed opacity-60 whitespace-pre-line">
                  {t("branch1Hours")}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://2gis.ru/spb/search/%D0%9A%D0%B5%D0%BA%D1%81%20%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-botanical group-hover:opacity-70 transition-opacity"
                >
                  <MapPin className="w-4 h-4" />
                  {lang === "ru" ? "Открыть в 2GIS" : "Open in 2GIS"}
                </a>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.4} className="h-full">
            <div className="flex flex-col h-full border-t border-stone-200 pt-8 relative opacity-70 hover:opacity-100 transition-opacity group">
              <h3 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest mb-4">
                {t("branch2Name")}
              </h3>
              <h4 className="font-serif italic text-3xl text-stone-900 mb-4">
                {t("branch2")}
              </h4>
              <div className="flex items-start gap-4 mb-4">
                <p className="text-sm font-semibold">{t("branch2Address")}</p>
              </div>
              <div className="mt-4">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] mb-2 opacity-60">
                  {lang === "ru" ? "Часы работы" : "Hours"}
                </p>
                <p className="text-xs text-stone-900 leading-relaxed opacity-60">
                  {t("branch2Hours")}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://yandex.ru/maps/-/CDu~m-t~"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 group-hover:opacity-70 transition-opacity"
                >
                  <MapPin className="w-4 h-4" />
                  {lang === "ru" ? "Открыть в Yandex Maps" : "Open in Yandex"}
                </a>
              </div>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.6}>
          <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="font-serif italic text-2xl text-stone-900">
              {t("contact")}
            </h3>
            <a
              href="tel:+79117982730"
              className="group flex items-center justify-center gap-3 bg-botanical text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:opacity-90"
            >
              <Phone className="w-4 h-4" />
              <span>+7 (911) 798-27-30</span>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
