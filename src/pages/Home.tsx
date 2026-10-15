import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const content = {
    en: {
      eyebrow: "RubyBloom Nails",
      titleTop: "Press-On Nails",
      titleAccent: " crafted for you",
      desc:
        "Custom handmade press-on nails with elegant designs, personalized orders and easy online booking.",
    },
    gr: {
      eyebrow: "RubyBloom Νύχια",
      titleTop: "Press-On Νύχια",
      titleAccent: " φτιαγμένα για εσένα",
      desc:
        "Χειροποίητα press-on νύχια με κομψά σχέδια, προσωποποιημένες παραγγελίες και εύκολη ηλεκτρονική κράτηση.",
    },
  } as const;

  const t = lang === "gr" ? content.gr : content.en;

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center px-6">

      <section className="text-center max-w-2xl">

        <p className="uppercase tracking-[6px] text-pink-400 mb-4">
          {t.eyebrow}
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          {t.titleTop}
          <span className="text-pink-500">{t.titleAccent}</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">{t.desc}</p>

      </section>

    </main>
  );
}