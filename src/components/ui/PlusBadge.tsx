export default function PlusBadge({ className = "text-sm" }: { className?: string }) {
  return (
    <span
      className={`inline-block -skew-x-6 rounded-sm bg-accent px-2 py-0.5 font-bold italic leading-tight text-white ${className}`}
    >
      plus
    </span>
  );
}
