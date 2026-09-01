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
        bg-base-100/60
        px-4
        py-3
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-primary/50
        hover:bg-base-100
        hover:shadow-lg
        hover:shadow-primary/10
      "
    >
      <Icon
        className="
          text-xl
          text-base-content/80
          transition-all
          duration-300
          group-hover:scale-125
          group-hover:text-primary
        "
      />

      <span className="font-medium">
        {skill.name}
      </span>
    </div>
  );
}
