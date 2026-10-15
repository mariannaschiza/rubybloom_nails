import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  image?: string;
  children?: ReactNode;
}

export default function Modal({ open, onClose, title, image, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="article-modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section
        className="article-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
      >
        <header className="article-modal__header">
          <h2 id="article-modal-title" className="article-modal__title">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="article-modal__close"
          >
            ×
          </button>
        </header>

        {image && <img src={image} alt={title} className="article-modal__image" />}

        <div className="article-modal__content">{children}</div>
      </section>
    </div>,
    document.body,
  );
}
