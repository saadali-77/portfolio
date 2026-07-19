type Props = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl mb-16">
      {badge && (
        <div className="badge badge-primary mb-4">
          {badge}
        </div>
      )}

      <h2 className="text-4xl lg:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-base-content/70">
          {description}
        </p>
      )}
    </div>
  );
}