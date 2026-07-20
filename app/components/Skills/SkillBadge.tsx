import { Skill } from "@/types/skills";

type Props = {
  skill: Skill;
};

export default function SkillBadge({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-base-300
        bg-base-100
        px-4
        py-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      <Icon
        className="
          text-xl
          transition-transform
          duration-300
          group-hover:scale-125
        "
      />

      <span className="font-medium">
        {skill.name}
      </span>
    </div>
  );
}