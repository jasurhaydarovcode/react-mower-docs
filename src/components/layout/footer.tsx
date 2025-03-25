import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="font-bold text-reactmower-blue">React</span> Mower
            </h3>
            <p className="text-sm text-muted-foreground">
              A powerful React package for protecting your web applications from unwanted developer tools access and cursor-based interactions.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs/getting-started"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/jasurhaydarovcode/react-mower"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/jasurhaydarovcode/react-mower/issues"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/react-mower"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NPM Package
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} React Mower. All rights reserved.</p>
          <p>
            Created by{" "}
            <Link
              href="https://github.com/jasurhaydarovcode"
              className="font-medium underline underline-offset-4 hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jasur Haydarov
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
