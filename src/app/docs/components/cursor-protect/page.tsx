import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function CursorProtectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          CursorProtect
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Protect your application from unauthorized cursor-based interactions.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The <code>CursorProtect</code> component monitors mouse position, blocks specific keyboard shortcuts,
          and shows a full-screen protection overlay to prevent unauthorized interactions with your application.
        </p>
        <p className="leading-7">
          This component is useful for protecting sensitive content from being interacted with by unauthorized users.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Features
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Cursor Protection</h3>
          <p className="leading-7">
            The CursorProtect component provides the following protection features:
          </p>
          <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Monitors mouse position</li>
            <li>Blocks specific keyboard shortcuts</li>
            <li>Shows full-screen protection overlay</li>
            <li>Prevents unauthorized interactions</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Usage
        </h2>
        <p className="leading-7">
          To use the <code>CursorProtect</code> component, you need to import it and wrap your application components with it:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import { CursorProtect } from 'react-mower';

function App() {
  return (
    <CursorProtect message="Screen Blocked">
      <YourApp />
    </CursorProtect>
  );
}`}</code>
        </pre>
        <p className="leading-7">
          With the <code>message</code> attribute, you can give your own arbitrary name that will be displayed when
          the screen block is activated.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Props
        </h2>
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

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Example
        </h2>
        <p className="leading-7">
          Here's a complete example of how to use the <code>CursorProtect</code> component in a React application:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import { CursorProtect } from 'react-mower';

function App() {
  return (
    <div className="App">
      <CursorProtect message="Access Denied">
        <header className="App-header">
          <h1>Protected Content</h1>
          <p>This content is protected from unauthorized cursor interactions.</p>
        </header>
        <main>
          <div className="sensitive-content">
            <h2>Sensitive Information</h2>
            <p>This is sensitive information that is protected by CursorProtect.</p>
          </div>
        </main>
      </CursorProtect>
    </div>
  );
}

export default App;`}</code>
        </pre>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/components/github-star-count">
            Next: GitHubStarCount
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/dev-tools-blocker">
            Back: DevToolsBlocker
          </Link>
        </Button>
      </div>
    </div>
  )
}
