import Link from "next/link";

export default function SectionHeading({
  title,
  href,
  linkLabel = "See all"
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="text-2xl font-bold text-mist-100">{title}</h2>
      {href && (
        <Link href={href} className="text-sm text-floodlight-400 hover:text-floodlight-500">
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
