import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Image({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
}: ImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={false}
      />
    </div>
  );
}
