import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const other = lang === "en" ? "gr" : "en";
  const label = other === "en" ? "EN" : "GR";
  const ariaLabel = other === "en" ? "Switch to English" : "Μετάβαση στα Ελληνικά";

  return (
    <div className="language-selector">
      <button
        type="button"
        className={`lang-btn lang-btn--single`}
        onClick={() => setLang(other)}
        aria-label={ariaLabel}
      >
        {label}
      </button>
    </div>
  );
}
