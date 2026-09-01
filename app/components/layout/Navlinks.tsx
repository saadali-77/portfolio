import Link from "next/link";
import { NAV_LINKS } from '@/constants/navigation'

export default function NavLinks() {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group relative rounded-lg px-1 py-2 font-medium text-base-content/75 transition-colors duration-300 hover:bg-transparent hover:text-base-content"
          >
            {link.label}
            <span className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
        </li>
      ))}
    </>
  );
}
