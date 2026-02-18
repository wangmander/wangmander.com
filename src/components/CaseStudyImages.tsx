"use client";

import Image from "next/image";
import { Lightbox, useLightbox } from "./Lightbox";

export function CaseStudyHero({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const lightbox = useLightbox();

  return (
    <>
      <button
        onClick={() => lightbox.open(src, alt)}
        className="block w-full mb-24 rounded-[10px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.10),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.14),0_4px_8px_rgba(0,0,0,0.08)] transition-shadow cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1600}
          className="w-full h-auto"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </button>
      <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={lightbox.close} />
    </>
  );
}

export function CaseStudyDecisionImages({
  images,
}: {
  images: { src: string; caption: string }[];
}) {
  const lightbox = useLightbox();

  return (
    <>
      <div className="space-y-6">
        {images.map((img, j) => (
          <div key={j}>
            <button
              onClick={() => lightbox.open(img.src, img.caption)}
              className="block w-full rounded-[10px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.10),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.14),0_4px_8px_rgba(0,0,0,0.08)] transition-shadow cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={2400}
                height={1600}
                className="w-full h-auto"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </button>
            <p className="mt-3 text-sm text-muted text-center">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
      <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={lightbox.close} />
    </>
  );
}
