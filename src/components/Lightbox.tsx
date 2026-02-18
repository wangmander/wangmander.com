"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export function useLightbox() {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const open = useCallback((imageSrc: string, imageAlt: string) => {
    setSrc(imageSrc);
    setAlt(imageAlt);
  }, []);

  const close = useCallback(() => {
    setSrc(null);
    setAlt("");
  }, []);

  return { src, alt, open, close, isOpen: src !== null };
}

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (src) {
      // Trigger enter animation on next frame
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [src]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    if (src) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  if (!src) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ease-out ${
        visible ? "bg-black/80 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className={`absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-all duration-200 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        aria-label="Close"
      >
        &times;
      </button>

      {/* Image */}
      <div
        className={`relative max-w-[92vw] max-h-[90vh] transition-all duration-200 ease-out ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={3000}
          height={2000}
          className="max-w-full max-h-[90vh] w-auto h-auto rounded-sm"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
