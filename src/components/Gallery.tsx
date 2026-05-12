import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function Gallery() {
  const { t } = useLanguage();

  const images = [
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
      alt: "Bakery interior",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800",
      alt: "Fresh pastries",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
      alt: "Coffee art",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      alt: "Coffee cup",
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeInView>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-7xl text-stone-900 tracking-tighter mb-4">
                {t("galleryTitle")}
              </h2>
            </div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-botanical hover:opacity-70 transition-opacity"
            >
              {t("contact")}
            </a>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div key={idx} className={img.className}>
              <FadeInView
                delay={idx * 0.1}
                className="relative group rounded-[24px] overflow-hidden w-full h-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </FadeInView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
