import Image from "next/image";
import { site } from "@/data/medisure-content";

export default function BrandLogo({
  alt = site.logo.alt,
  className,
}: {
  alt?: string;
  className?: string;
}) {
  const src = `${site.logo.src}?v=20260704`;

  return (
    <Image
      src={src}
      alt={alt}
      width={site.logo.width}
      height={site.logo.height}
      unoptimized
      className={className}
    />
  );
}
