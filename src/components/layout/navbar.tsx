"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Getting Started", path: "/docs/getting-started" },
  { name: "Components", path: "/docs/components" },
  { name: "API", path: "/docs/api" },
  { name: "Examples", path: "/docs/examples" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="font-bold text-lg flex items-center gap-2">
            <span className="font-bold text-reactmower-blue">React</span> Mower
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            asChild
          >
            <Link
              href="https://github.com/jasurhaydarovcode/react-mower"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
