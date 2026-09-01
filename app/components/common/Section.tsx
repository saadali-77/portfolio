type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  alternate = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 lg:py-32 ${
        alternate
          ? "bg-gradient-to-b from-base-200/60 via-base-200/30 to-transparent"
          : ""
      } ${className}`}
    >
      {alternate && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />
        </>
      )}
      {children}
    </section>
  );
}
