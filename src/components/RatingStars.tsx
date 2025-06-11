import { Star, StarHalf } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  max?: number;
  size?: number;
};

const RatingStars = ({ rating, max = 5, size = 24 }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);
  return (
    <div className="flex gap-2">
      {/* Render fullStars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={index} size={size} className="text-yellow-400 fill-yellow-200" />
      ))}

      {/* Render half star */}
      {hasHalf && <StarHalf size={size} className="text-yellow-400 fill-yellow-200" />}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={index} size={size} />
      ))}
    </div>
  );
};

export default RatingStars;
