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
  layout,
}: {
  images: { src: string; caption: string }[];
  layout?: "grid-2x2" | "side-by-side";
}) {
  const lightbox = useLightbox();

  const shadowClass = "rounded-[10px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.10),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.14),0_4px_8px_rgba(0,0,0,0.08)] transition-shadow cursor-zoom-in";

  if (layout === "grid-2x2") {
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, j) => (
            <div key={j}>
              <button
                onClick={() => lightbox.open(img.src, img.caption)}
                className={`block w-full ${shadowClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={1200}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 50vw, 600px"
                />
              </button>
              <p className="mt-3 text-sm text-muted text-center">{img.caption}</p>
            </div>
          ))}
        </div>
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={lightbox.close} />
      </>
    );
  }

  if (layout === "side-by-side") {
    return (
      <>
        <div className="flex gap-6 justify-center flex-wrap">
          {images.map((img, j) => {
            const isMobile = img.src.toLowerCase().includes("mobile");
            return (
              <div key={j} className="flex flex-col items-center">
                <button
                  onClick={() => lightbox.open(img.src, img.caption)}
                  className={`block ${shadowClass} ${isMobile ? "w-[260px]" : "w-full max-w-[480px]"}`}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={isMobile ? 520 : 960}
                    height={isMobile ? 1040 : 800}
                    className="w-full h-auto"
                    sizes={isMobile ? "260px" : "480px"}
                  />
                </button>
                <p className="mt-3 text-sm text-muted text-center">{img.caption}</p>
              </div>
            );
          })}
        </div>
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={lightbox.close} />
      </>
    );
  }

  // Default: stacked
  return (
    <>
      <div className="space-y-6">
        {images.map((img, j) => {
          const srcLower = img.src.toLowerCase();
          const isMobile = srcLower.includes("mobile");
          const isContained = srcLower.includes("desktop-full");
          const containerClass = isMobile || isContained ? "flex flex-col items-center" : "";
          const buttonWidth = isMobile ? "w-[320px]" : isContained ? "w-full max-w-[700px]" : "w-full";
          const imgWidth = isMobile ? 640 : 2400;
          const imgHeight = isMobile ? 1280 : 1600;
          const imgSizes = isMobile ? "320px" : isContained ? "700px" : "(max-width: 1200px) 100vw, 1200px";
          return (
            <div key={j} className={containerClass}>
              <button
                onClick={() => lightbox.open(img.src, img.caption)}
                className={`block ${shadowClass} ${buttonWidth}`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={imgWidth}
                  height={imgHeight}
                  className="w-full h-auto"
                  sizes={imgSizes}
                />
              </button>
              <p className="mt-3 text-sm text-muted text-center">{img.caption}</p>
            </div>
          );
        })}
      </div>
      <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={lightbox.close} />
    </>
  );
}
