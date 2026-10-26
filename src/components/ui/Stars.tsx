import { Star } from "lucide-react";

/** Accessible star rating row. */
export default function Stars({
  rating,
  className = "",
  size = "w-4 h-4",
}: {
  rating: number;
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-brand-500 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={`${size} ${
            i < Math.round(rating) ? "fill-current" : "fill-current opacity-30"
          }`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}
