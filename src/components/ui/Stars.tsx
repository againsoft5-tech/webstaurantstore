import { Star } from "lucide-react";

/** 5-star rating with partial fill (e.g. 4.6 fills the 5th star 60%). */
export default function Stars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 fill-neutral-300 text-neutral-300" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star size={size} className="fill-[#f5b301] text-[#f5b301]" />
            </span>
          </span>
        );
      })}
    </span>
  );
}
