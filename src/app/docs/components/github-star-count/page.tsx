import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function GitHubStarCountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          GitHubStarCount
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Display a GitHub star button in your React application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The <code>GitHubStarCount</code> component displays a GitHub star button for your repository,
          allowing users to easily star your repository and showing the current star count.
        </p>
        <p className="leading-7">
          This component is useful for promoting your GitHub repository and tracking user engagement.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Usage
        </h2>
        <p className="leading-7">
          To use the <code>GitHubStarCount</code> component, you need to import it and include it in your application:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import { GitHubStarCount } from 'react-mower';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <GitHubStarCount githubStar="username/repo" />
    </div>
  );
}`}</code>
        </pre>
        <p className="leading-7">
          Make sure to replace <code>username/repo</code> with your GitHub repository path.
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
                <th className="py-3 px-4 text-left font-semibold">Required</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">githubStar</td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">The GitHub repository path in the format "username/repo"</td>
                <td className="py-3 px-4">Yes</td>
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
          Here's a complete example of how to use the <code>GitHubStarCount</code> component in a React application:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import { GitHubStarCount } from 'react-mower';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Awesome React App</h1>
        <p>Check out our GitHub repository and give us a star!</p>
        <GitHubStarCount githubStar="jasurhaydarovcode/react-mower" />
      </header>
      <main>
        <div className="content">
          <h2>Welcome to My App</h2>
          <p>This is a sample application using React Mower's GitHubStarCount component.</p>
        </div>
      </main>
      <footer>
        <p>© 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Additional Information
        </h2>
        <p className="leading-7">
          The <code>GitHubStarCount</code> component fetches the star count from the GitHub API and displays
          it alongside a star button. When users click the button, they will be redirected to the GitHub
          repository page where they can star the repository.
        </p>
        <p className="leading-7">
          Note that the star count is updated periodically and may not reflect the most recent count immediately.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/components/copy-paste-protected">
            Next: CopyPasteProtected
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/cursor-protect">
            Back: CursorProtect
          </Link>
        </Button>
      </div>
    </div>
  )
}
