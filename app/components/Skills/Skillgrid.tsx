

import { skills } from "@/data/Skills";
import SkillCard from "./Skillcard";

export default function SkillGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
      {skills.map((category) => (
        <SkillCard
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
}