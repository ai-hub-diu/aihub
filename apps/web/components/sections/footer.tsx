import Link from "next/link";
import { Sparkles } from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Jobs", href: "/jobs" },
      { label: "Skill Passport", href: "/#skill-passport" },
      { label: "Certificates", href: "/certificates/verify" },
      { label: "Products", href: "/#products" },
    ],
  },
  {
    title: "Students",
    links: [
      { label: "Learn", href: "/courses" },
      { label: "Find Opportunities", href: "/jobs" },
      { label: "Build Portfolio", href: "/#skill-passport" },
      { label: "Verify Certificate", href: "/certificates/verify" },
    ],
  },
  {
    title: "Industry",
    links: [
      { label: "Post an Opportunity", href: "/industry" },
      { label: "Find Talent", href: "/industry" },
      { label: "Partner With Us", href: "/industry" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About the Hub", href: "/#" },
      { label: "Contact", href: "/#" },
      { label: "FAQ", href: "/#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/#" },
      { label: "Terms", href: "/#" },
      { label: "Code of Conduct", href: "/#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-hub grid grid-cols-2 gap-10 py-14 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4.5 w-4.5" />
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">Learn. Work. Build. Grow.</p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-6">
        <div className="container-hub flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 AIHUB</span>
          <span>Demo Platform</span>
        </div>
      </div>
    </footer>
  );
}
