

import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};