type TechBadgeProps = {
  label: string;
};

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-base-300
        bg-base-100/60
        px-3
        py-1
        text-sm
        font-medium
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-primary/60
        hover:bg-primary/10
        hover:text-primary
      "
    >
      {label}
    </span>
  );
}
