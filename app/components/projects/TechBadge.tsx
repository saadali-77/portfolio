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
        hover:border-primary
        hover:text-primary
      "
    >
      {label}
    </span>
  );
}