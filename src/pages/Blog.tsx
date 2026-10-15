import { useState } from "react";
import Modal from "../components/Modal";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "Autumn Nail Trends 2026",
    excerpt:
      "Explore the top press-on nail designs for spring: pastels, florals, and minimal accents.",
    body:
      "Discover the freshest press-on nail trends for the season, from soft pastels to delicate florals. Learn how to style each look and which shapes work best for different occasions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbTDP5E3AzFDepYkPFO9R8M1bkemcPxDt1tsN7zShWQ&s=10",
  },
  {
    id: "2",
    title: "How to Apply Press-Ons",
    excerpt: "Step-by-step guide to achieve a long-lasting, salon-quality finish at home.",
    body:
      "A clear step-by-step routine for prepping, sizing, and applying press-on nails to maximize wear time and comfort. Includes tips for removal and reuse.",
    image:
      "https://www.beautyartgarden.com/cdn/shop/articles/handmade-elegance-why-our-handmade-press-on-nails-stand-out-269153_900x.webp?v=1722326084",
  },
  {
    id: "3",
    title: "Care Tips for Reusable Sets",
    excerpt: "Keep your press-on sets looking fresh longer with simple cleaning and storage tips.",
    body:
      "Learn the best cleaning methods, gentle adhesives, and storage ideas to preserve your press-on sets between uses. Small habits make a big difference.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
  }
];

export default function Blog() {
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog</h1>

        <div className="row g-4">
          {posts.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-4">
              <article
                onClick={() => setSelected(p)}
                className="card h-100 border-0 shadow-sm overflow-hidden cursor-pointer transition transform hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(p);
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-dark mb-3">{p.title}</h3>
                  <p className="card-text text-muted flex-grow-1">{p.excerpt}</p>
                  <button
                    className="btn btn-pink mt-3 w-auto align-self-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(p);
                    }}
                    aria-label={`Read more about ${p.title}`}>
                    Read more
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <Modal
          open={Boolean(selected)}
          onClose={() => setSelected(null)}
          title={selected?.title}
          image={selected?.image}
        >
          <p className="mb-4 text-gray-700">{selected?.body}</p>
        </Modal>
      </section>
    </main>
  );
}
