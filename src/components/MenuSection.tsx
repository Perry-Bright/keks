import { useLanguage } from "../LanguageContext";
import { FadeInView } from "./FadeInView";

export function MenuSection() {
  const { lang, t } = useLanguage();

  const menuCategories = [
    {
      title: t("categoryBreakfast"),
      desc: lang === "ru" ? "Подаем весь день" : "Served all day",
      items: [
        {
          name: lang === "ru" ? "Английский завтрак" : "English Breakfast",
          details:
            lang === "ru"
              ? "2 яйца, фасоль, сосиски, тост"
              : "2 eggs, beans, 2 sausages, bread",
          prices: [{ size: "", price: "350 ₽" }],
          image:
            "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: lang === "ru" ? "Французский завтрак" : "French Breakfast",
          details:
            lang === "ru"
              ? "Яйца, круассан, ветчина, сыр"
              : "2 eggs, croissant, ham, cheese",
          prices: [{ size: "", price: "310 ₽" }],
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: lang === "ru" ? "Русский завтрак" : "Russian Breakfast",
          details:
            lang === "ru"
              ? "3 яйца, 2 сосиски, точеты, тост"
              : "3 eggs, 2 sausages, tomato, bread",
          prices: [{ size: "", price: "310 ₽" }],
          image:
            "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=200",
        },
      ],
    },
    {
      title: t("categoryCoffee"),
      desc: "Espresso • Filter",
      items: [
        {
          name: lang === "ru" ? "Эспрессо / Фильтр" : "Espresso / Filter",
          details: lang === "ru" ? "Светлая обжарка" : "Light roast profile",
          prices: [
            { size: "Esp", price: "130 ₽" },
            { size: "Fil", price: "150 ₽" },
          ],
          image:
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: "Капучино",
          details: "",
          prices: [
            { size: "S", price: "180 ₽" },
            { size: "M", price: "240 ₽" },
            { size: "L", price: "290 ₽" },
          ],
          image:
            "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: "Латте",
          details: "",
          prices: [
            { size: "S", price: "190 ₽" },
            { size: "M", price: "220 ₽" },
          ],
          image:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=200",
        },
      ],
    },
    {
      title: t("categorySignature"),
      desc: lang === "ru" ? "Наш авторский стиль" : "Our signature style",
      items: [
        {
          name: lang === "ru" ? "Бамбл" : "Bumble",
          details:
            lang === "ru"
              ? "Эспрессо, апельсин, карамель"
              : "Espresso, orange juice, caramel",
          prices: [
            { size: "M", price: "280 ₽" },
            { size: "L", price: "310 ₽" },
          ],
          image:
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: lang === "ru" ? "Лавандовый Раф" : "Lavender Raf",
          details:
            lang === "ru" ? "С цветочным ароматом" : "Floral aromatic profile",
          prices: [
            { size: "M", price: "310 ₽" },
            { size: "L", price: "360 ₽" },
          ],
          image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: lang === "ru" ? "Банановое какао" : "Banana Cocoa",
          details:
            lang === "ru"
              ? "Идеально для детей"
              : "Banana milk alternative base",
          prices: [
            { size: "M", price: "180 ₽" },
            { size: "L", price: "260 ₽" },
          ],
          image:
            "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=200",
        },
      ],
    },
    {
      title: t("categoryBites"),
      desc: lang === "ru" ? "Идеально к кофе" : "Perfect with coffee",
      items: [
        {
          name: lang === "ru" ? "Сырники" : "Syrniki",
          details:
            lang === "ru"
              ? "Из фермерского творога"
              : "From farmer's cottage cheese",
          prices: [{ size: "", price: "210 ₽" }],
          image:
            "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=200",
        },
        {
          name: lang === "ru" ? "Овсяная каша" : "Oatmeal Porridge",
          details:
            lang === "ru" ? "С топпингами на выбор" : "With choice of toppings",
          prices: [{ size: "", price: "150 ₽" }],
          image:
            "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&q=80&w=200",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          {/* Images Layout */}
          <div className="lg:col-span-5 flex gap-4 relative sticky top-24">
            <FadeInView className="flex-1 h-[500px] xl:h-[600px] rounded-[40px] bg-stone-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=800"
                alt="Croissants and Coffee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-botanical/90 backdrop-blur-md p-4 rounded-[24px] border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                      To-Go Coffee
                    </p>
                    <p className="font-serif italic text-2xl text-stone-100">
                      -50% OFF
                    </p>
                  </div>
                  <div className="text-white opacity-80 h-10 w-10 border border-white/30 rounded-full flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute inset-4 border-2 border-white/30 rounded-[32px] pointer-events-none"></div>
            </FadeInView>
            <FadeInView
              delay={0.2}
              className="w-32 xl:w-40 flex flex-col gap-4"
            >
              <div className="aspect-square rounded-[32px] bg-[#E5E2D9] flex items-center justify-center p-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400"
                  alt="Signature Coffee"
                  className="w-full h-full object-cover rounded-[28px]"
                />
              </div>
              <div className="flex-1 w-full rounded-[32px] border border-botanical flex items-center justify-center p-4">
                <span
                  className="text-[10px] uppercase font-bold tracking-[0.3em] rotate-180 text-botanical whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Espresso • Filter
                </span>
              </div>
            </FadeInView>
          </div>

          {/* Menu Data */}
          <div className="lg:col-span-7 pt-8">
            <FadeInView>
              <h2 className="font-serif italic text-4xl md:text-5xl text-stone-900 mb-12">
                {t("menuTitle")}
              </h2>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {menuCategories.map((category, idx) => (
                <div key={idx} className="h-full">
                  <FadeInView
                    delay={0.1 * idx}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-6 border-b border-stone-200 pb-2 flex justify-between items-end">
                      <h3 className="font-serif italic text-2xl text-stone-900">
                        {category.title}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] mb-1">
                        {category.desc}
                      </span>
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                      {category.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="group flex justify-between items-center gap-4 p-3 transition-colors hover:bg-stone-50 rounded-[16px] border border-transparent hover:border-stone-100"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover border border-stone-200/50"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-stone-900 mb-0.5">
                              {item.name}
                            </h4>
                            {item.details && (
                              <p className="text-[10px] opacity-60 leading-relaxed font-sans">
                                {item.details}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-1 items-end shrink-0">
                            {item.prices.map((p, pIdx) => (
                              <div
                                key={pIdx}
                                className="flex items-center gap-1.5"
                              >
                                {p.size && (
                                  <span className="text-[8px] font-bold tracking-wider text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded-full uppercase">
                                    {p.size}
                                  </span>
                                )}
                                <span className="whitespace-nowrap text-xs font-bold text-botanical">
                                  {p.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeInView>
                </div>
              ))}
            </div>

            <FadeInView delay={0.6}>
              <div className="mt-16 text-[11px] opacity-60 font-sans italic border border-stone-200 rounded-full px-5 py-3 inline-block">
                *{" "}
                {lang === "ru"
                  ? "Полный ассортимент десертов и выпечки уточняйте на витрине или у бариста."
                  : "Please ask the barista for the full assortment of daily pastries."}
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
