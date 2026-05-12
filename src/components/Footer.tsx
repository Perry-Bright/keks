import { useLanguage } from "../LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-stone-800 py-10 px-10 text-center flex flex-col md:flex-row justify-between items-center text-[10px] font-bold border-t border-stone-200">
      <div className="flex items-center justify-center mb-4 md:mb-0 group">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="./logo.png"
            alt="KEKC Logo"
            className="w-24 h-auto group-hover:-rotate-6 transition-transform duration-300 drop-shadow-sm"
          />
        </a>
      </div>
      <p className="uppercase tracking-widest text-[#5A5A40] opacity-50">
        {t("footerDetails")}
      </p>
      <div className="flex gap-4 mt-4 md:mt-0 opacity-40 hover:opacity-100 transition-opacity">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="w-6 h-6 border border-stone-800 rounded-full flex items-center justify-center text-[8px] font-bold hover:bg-botanical hover:text-white hover:border-botanical transition-colors"
        >
          IG
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="w-6 h-6 border border-stone-800 rounded-full flex items-center justify-center text-[8px] font-bold hover:bg-botanical hover:text-white hover:border-botanical transition-colors"
        >
          VK
        </a>
      </div>
    </footer>
  );
}
