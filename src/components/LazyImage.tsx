import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  loading?: "eager" | "lazy" | undefined;
  decoding?: "async" | "auto" | "sync" | undefined;
  priority?: "high" | "low" | "auto";
  className?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  loading = "lazy",
  decoding = "async",
  priority = "auto",
  ...rest
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={priority}
      className={`${className} ${
        loaded
          ? "opacity-100"
          : "bg-gray-400 blur-md  opacity-30 transition-opacity duration-[3000ms] animate-pulse"
      } `}
      {...rest}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyImage;
