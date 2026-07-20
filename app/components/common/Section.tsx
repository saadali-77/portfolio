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
      className={`py-24 lg:py-32 ${alternate ? "bg-base-200/50" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
