import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Components
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Explore the components provided by React Mower.
        </p>
      </div>

      <div className="space-y-4">
        <p className="leading-7">
          React Mower provides several components that you can use to protect your web applications.
          Each component serves a specific purpose and can be used independently or in combination with others.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="border border-muted">
          <CardHeader className="pb-3">
            <CardTitle>DevToolsBlocker</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Prevents access to browser developer tools through key blocking, context menu blocking, and window size detection.
            </p>
            <Button asChild size="sm" variant="outline">
              <Link href="/docs/components/dev-tools-blocker">
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-muted">
          <CardHeader className="pb-3">
            <CardTitle>CursorProtect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Monitors mouse position, blocks specific keyboard shortcuts, and shows a protection overlay to prevent unauthorized interactions.
            </p>
            <Button asChild size="sm" variant="outline">
              <Link href="/docs/components/cursor-protect">
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-muted">
          <CardHeader className="pb-3">
            <CardTitle>GitHubStarCount</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Displays a GitHub star button to promote your repository and track user engagement.
            </p>
            <Button asChild size="sm" variant="outline">
              <Link href="/docs/components/github-star-count">
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4 mt-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Component Usage
        </h2>
        <p className="leading-7">
          React Mower components can be used together or separately, depending on your needs.
          Here's a quick guide on how to use them:
        </p>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Using All Components
          </h3>
          <p className="leading-7">
            To use all components together, you can wrap your application with the <code>DevToolsBlocker</code> component
            and include the <code>CursorProtect</code> and <code>GitHubStarCount</code> components as needed:
          </p>
          <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
            <code>{`import 'react-toastify/dist/ReactToastify.css';
import { DevToolsBlocker, CursorProtect, GitHubStarCount } from 'react-mower';

function App() {
  return (
    <DevToolsBlocker>
      <CursorProtect message="Screen Blocked">
        <div>
          <h1>My Protected App</h1>
          <GitHubStarCount githubStar="username/repo" />
          {/* Your app content */}
        </div>
      </CursorProtect>
    </DevToolsBlocker>
  );
}`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Using Individual Components
          </h3>
          <p className="leading-7">
            Each component can also be used independently. For example, if you only want to block developer tools:
          </p>
          <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
            <code>{`import 'react-toastify/dist/ReactToastify.css';
import { DevToolsBlocker } from 'react-mower';

function App() {
  return (
    <DevToolsBlocker>
      {/* Your app content */}
    </DevToolsBlocker>
  );
}`}</code>
          </pre>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/components/dev-tools-blocker">
            DevToolsBlocker
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/getting-started/basic-setup">
            Back to Basic Setup
          </Link>
        </Button>
      </div>
    </div>
  )
}
