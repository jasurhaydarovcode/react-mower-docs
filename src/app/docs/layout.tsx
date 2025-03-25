"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/getting-started",
      },
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
      },
      {
        title: "Basic Setup",
        href: "/docs/getting-started/basic-setup",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Overview",
        href: "/docs/components",
      },
      {
        title: "DevToolsBlocker",
        href: "/docs/components/dev-tools-blocker",
      },
      {
        title: "CursorProtect",
        href: "/docs/components/cursor-protect",
      },
      {
        title: "GitHubStarCount",
        href: "/docs/components/github-star-count",
      },
    ],
  },
  {
    title: "API",
    items: [
      {
        title: "API Reference",
        href: "/docs/api",
      },
      {
        title: "Props",
        href: "/docs/api/props",
      },
      {
        title: "Events",
        href: "/docs/api/events",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Basic Examples",
        href: "/docs/examples",
      },
      {
        title: "Advanced Examples",
        href: "/docs/examples/advanced",
      },
    ],
  },
]

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-2 lg:py-8">
            <nav className="h-full overflow-y-auto">
              {sidebarNav.map((group, groupIndex) => (
                <div key={groupIndex} className="pb-6">
                  <h3 className="mb-2 font-semibold">{group.title}</h3>
                  <ul className="space-y-1">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                            pathname === item.href
                              ? "bg-muted font-medium text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
