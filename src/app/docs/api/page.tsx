import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function ApiPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Comprehensive API documentation for React Mower components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          This section provides detailed information about the API of React Mower components,
          including props, methods, and event handlers.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Component Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-semibold">Component</th>
                <th className="py-3 px-4 text-left font-semibold">Description</th>
                <th className="py-3 px-4 text-left font-semibold">Props</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">
                  <Link
                    href="/docs/components/dev-tools-blocker"
                    className="text-reactmower-blue hover:underline"
                  >
                    DevToolsBlocker
                  </Link>
                </td>
                <td className="py-3 px-4">Blocks access to browser developer tools</td>
                <td className="py-3 px-4">children</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">
                  <Link
                    href="/docs/components/cursor-protect"
                    className="text-reactmower-blue hover:underline"
                  >
                    CursorProtect
                  </Link>
                </td>
                <td className="py-3 px-4">Protects against cursor-based interactions</td>
                <td className="py-3 px-4">message, children</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">
                  <Link
                    href="/docs/components/github-star-count"
                    className="text-reactmower-blue hover:underline"
                  >
                    GitHubStarCount
                  </Link>
                </td>
                <td className="py-3 px-4">Displays a GitHub star button</td>
                <td className="py-3 px-4">githubStar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          DevToolsBlocker API
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-semibold">Prop</th>
                  <th className="py-3 px-4 text-left font-semibold">Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono text-sm">children</td>
                  <td className="py-3 px-4">ReactNode</td>
                  <td className="py-3 px-4">The components to be protected</td>
                  <td className="py-3 px-4">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          CursorProtect API
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-semibold">Prop</th>
                  <th className="py-3 px-4 text-left font-semibold">Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono text-sm">message</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">The message to display when the screen block is activated</td>
                  <td className="py-3 px-4">"Screen Blocked"</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono text-sm">children</td>
                  <td className="py-3 px-4">ReactNode</td>
                  <td className="py-3 px-4">The components to be protected</td>
                  <td className="py-3 px-4">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          GitHubStarCount API
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-semibold">Prop</th>
                  <th className="py-3 px-4 text-left font-semibold">Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-mono text-sm">githubStar</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">The GitHub repository path in the format "username/repo"</td>
                  <td className="py-3 px-4">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/api/props">
            Next: Props Reference
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/github-star-count">
            Back: GitHubStarCount
          </Link>
        </Button>
      </div>
    </div>
  )
}
