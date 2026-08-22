"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export function ProductGallery({
  images,
  productName,
}: {
  images: GalleryImage[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 820px) 100vw, 500px"
        />
      </div>
      <div className="product-gallery-thumbnails" aria-label={`${productName} images`}>
        {images.map((image, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1} of ${images.length}`}
            aria-pressed={index === activeIndex}
          >
            <Image src={image.src} alt="" fill sizes="90px" />
          </button>
        ))}
      </div>
    </div>
  );
}
