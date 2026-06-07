interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass} ${className}`}>
      {tag && (
        <span className="font-mono text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full w-fit">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
