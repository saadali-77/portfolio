import Link from "next/link";
import { NAV_LINKS } from '@/constants/navigation'

export default function NavLinks() {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  );
}