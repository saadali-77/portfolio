import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}