import Link from "next/link";

export default function SectionTitle({
  children,
  more,
}: {
  children: React.ReactNode;
  more?: { label: string; href: string };
}) {
  return (
    <div className="mb-5 flex items-baseline justify-center gap-4">
      <h2 className="text-center text-2xl font-medium text-ink">{children}</h2>
      {more && (
        <Link href={more.href} className="text-sm text-brand hover:underline">
          {more.label} ›
        </Link>
      )}
    </div>
  );
}
