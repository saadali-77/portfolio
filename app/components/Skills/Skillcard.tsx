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
        card
        bg-base-200
        border
        border-base-300
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="card-body">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
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