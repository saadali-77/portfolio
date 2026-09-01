import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group text-2xl font-bold tracking-tight transition-transform duration-300 hover:-translate-y-0.5"
    >
      Saad
      <span className="text-gradient">.</span>
    </Link>
  );
}
