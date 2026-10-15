import { useLanguage } from "../contexts/LanguageContext";
import "./Shop.css";

const products = [
  {
    id: "rosewater",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85",
    price: 24,
    name: { en: "Rosewater", gr: "Ροζ απόχρωση" },
    description: {
      en: "Soft blush tones with a glossy finish for an effortless everyday look.",
      gr: "Απαλές ροζ αποχρώσεις με λαμπερό φινίρισμα για κάθε μέρα.",
    },
  },
  {
    id: "cherry-glaze",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85",
    price: 32,
    name: { en: "Cherry Glaze", gr: "Κερασί λάμψη" },
    description: {
      en: "A deep cherry-red set with a smooth, glass-like shine.",
      gr: "Βαθύ κερασί χρώμα με λεία, γυαλιστερή όψη.",
    },
  },
  {
    id: "pearl-french",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85",
    price: 38,
    name: { en: "Pearl French", gr: "Γαλλικό περλέ" },
    description: {
      en: "A modern French manicure with a pearly sheen and delicate detail.",
      gr: "Μοντέρνο γαλλικό μανικιούρ με περλέ λάμψη και λεπτές λεπτομέρειες.",
    },
  },
  {
    id: "wildflower",
    image:
      "https://www.beautyartgarden.com/cdn/shop/articles/handmade-elegance-why-our-handmade-press-on-nails-stand-out-269153_900x.webp?v=1722326084",
    price: 45,
    name: { en: "Wildflower", gr: "Αγριολούλουδα" },
    description: {
      en: "Hand-painted floral accents bring a little garden to your fingertips.",
      gr: "Ζωγραφισμένες floral λεπτομέρειες φέρνουν μια ανοιξιάτικη πινελιά στα νύχια σου.",
    },
  },
  {
    id: "midnight-chrome",
    image:
      "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=1000&q=85",
    price: 50,
    name: { en: "Midnight Chrome", gr: "Μεσονύκτιο chrome" },
    description: {
      en: "A statement dark set finished with a luminous chrome effect.",
      gr: "Εντυπωσιακό σκούρο σετ με φωτεινό chrome εφέ.",
    },
  },
];

export default function Shop() {
  const { lang } = useLanguage();
  const isGreek = lang === "gr";

  return (
    <main className="shop-page">
      <section className="shop-content" aria-labelledby="shop-title">
        <header className="shop-heading">
          <p className="shop-eyebrow">RubyBloom Nails</p>
          <h1 id="shop-title">{isGreek ? "Press-On Νύχια" : "Press-On Nails"}</h1>
          <p className="shop-intro">
            {isGreek
              ? "Χειροποίητα σχέδια για να βρεις το σετ που σου ταιριάζει."
              : "Hand-finished designs to find the set that feels like you."}
          </p>
        </header>

        <div className="shop-category" aria-current="true">
          {isGreek ? "Press-On Νύχια" : "Press-On Nails"}
        </div>

        <div className="shop-grid">
          {products.map((product) => (
            <article className="shop-product" key={product.id}>
              <img
                className="shop-product__image"
                src={product.image}
                alt={product.name[lang]}
                loading="lazy"
              />
              <div className="shop-product__details">
                <div className="shop-product__title-row">
                  <h2>{product.name[lang]}</h2>
                  <p className="shop-product__price">
                    €{product.price.toFixed(2)}
                  </p>
                </div>
                <p className="shop-product__description">
                  {product.description[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}