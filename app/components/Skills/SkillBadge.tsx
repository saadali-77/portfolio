type Props = {
  skill: string;
};

export default function SkillBadge({ skill }: Props) {
  return (
    <span className="badge badge-primary badge-outline">
      {skill}
    </span>
  );
}