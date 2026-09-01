import SkillBadge from "./SkillBadge";
import { SkillCategory } from "@/types/skills";

type Props = {
  category: SkillCategory;
};

export default function SkillCard({ category }: Props) {
  const Icon = category.icon;

  return (
    <div
      className="
        glass glow-border
        group
        card
        rounded-3xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-primary/10
      "
    >
      <div className="card-body">

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <h3 className="text-xl font-semibold">
            {category.title}
          </h3>
        </div>


        {/* Skills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
