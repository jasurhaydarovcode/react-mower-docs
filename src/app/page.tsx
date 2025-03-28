import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-block" variant="outline">v1.5.2</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  <span className="text-reactmower-blue">React</span> Mower
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A powerful React package for protecting your web applications from unwanted
                  developer tools access and cursor-based interactions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/docs/getting-started">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/jasurhaydarovcode/react-mower" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </div>
              <div className="mt-4">
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                  <code>npm install react-mower</code>
                </pre>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-muted p-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-reactmower-blue/20 to-transparent opacity-50"></div>
                <div className="z-10 text-5xl md:text-7xl text-reactmower-blue flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-40 w-40 md:h-60 md:w-60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15L6 13L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 15L18 13L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 19L14 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                React Mower provides comprehensive protection for your web applications
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Block Developer Tools",
                description: "Prevent access to browser developer tools through key blocking, context menu blocking, and window size detection."
              },
              {
                title: "Cursor Protection",
                description: "Monitor mouse position, block specific keyboard shortcuts, and show protection overlay to prevent unauthorized interactions."
              },
              {
                title: "Screenshot Protection",
                description: "Block screenshot attempts to protect sensitive information displayed on the screen."
              },
              {
                title: "GitHub Star Button",
                description: "Display a GitHub star button to promote your repository and track user engagement."
              },
              {
                title: "Lightweight",
                description: "Minimal impact on your application's performance while providing powerful protection features."
              },
              {
                title: "Multiple Protection Layers",
                description: "Combine different protection mechanisms to create a comprehensive security solution."
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-muted">
                <CardHeader className="pb-2">
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to protect your React app?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with React Mower today and secure your web applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/docs/getting-started">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.npmjs.com/package/react-mower" target="_blank" rel="noopener noreferrer">
                  View on NPM
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
