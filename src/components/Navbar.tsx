import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import logo from "../assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === "ru" ? "en" : "ru");
  };

  const navLinks = [
    { name: t("menu"), href: "#menu" },
    { name: t("about"), href: "#about" },
    { name: t("locations"), href: "#locations" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl shadow-sm py-4 border-b border-white/30"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group inline-block"
        >
          <img
            src={logo}
            alt="KEKC Logo"
            className="w-24 md:w-32 h-auto group-hover:-rotate-6 transition-transform duration-300 drop-shadow-lg"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                   element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`relative text-xs uppercase tracking-widest font-semibold py-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-current after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out ${scrolled ? "text-stone-800 hover:text-botanical" : "text-white drop-shadow-md"}`}
            >
              {link.name}
            </a>
          ))}
          <div
            className={`flex border rounded-full p-1 text-[10px] font-bold ml-8 transition-colors ${scrolled ? "border-botanical" : "border-white/50 backdrop-blur-sm bg-black/10"}`}
          >
            <button
              onClick={() => setLang("ru")}
              className={`px-3 py-1 rounded-full transition-colors ${
                lang === "ru"
                  ? scrolled
                    ? "bg-botanical text-white"
                    : "bg-white text-stone-900"
                  : scrolled
                    ? "text-stone-900"
                    : "text-white hover:text-white/80"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-colors ${
                lang === "en"
                  ? scrolled
                    ? "bg-botanical text-white"
                    : "bg-white text-stone-900"
                  : scrolled
                    ? "text-stone-900"
                    : "text-white hover:text-white/80"
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <div
            className={`flex border rounded-full p-1 text-[10px] font-bold transition-colors ${scrolled ? "border-botanical" : "border-white/50 backdrop-blur-sm bg-black/10"}`}
          >
            <button
              onClick={() => setLang("ru")}
              className={`px-3 py-1 rounded-full transition-colors ${
                lang === "ru"
                  ? scrolled
                    ? "bg-botanical text-white"
                    : "bg-white text-stone-900"
                  : scrolled
                    ? "text-stone-900"
                    : "text-white"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-colors ${
                lang === "en"
                  ? scrolled
                    ? "bg-botanical text-white"
                    : "bg-white text-stone-900"
                  : scrolled
                    ? "text-stone-900"
                    : "text-white"
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors ${scrolled ? "text-stone-800" : "text-white drop-shadow-md"}`}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-t shadow-xl py-6 px-6 flex flex-col gap-6 ${
            scrolled
              ? "bg-white/70 border-white/30"
              : "bg-black/60 border-white/10"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                const element = document.querySelector(link.href);
                if (element) {
                   element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`inline-block text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:translate-x-2 ${
                scrolled
                  ? "text-stone-800 hover:text-botanical"
                  : "text-white hover:text-botanical-light drop-shadow-md"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
