import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function ExamplesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Examples
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Learn from real-world examples of React Mower usage.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Basic Examples
        </h2>
        <p className="leading-7">
          These examples show simple use cases for React Mower components.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          DevToolsBlocker Example
        </h3>
        <p className="leading-7">
          A simple example of using the <code>DevToolsBlocker</code> component to block developer tools access:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import ReactDOM from 'react-dom';
import { DevToolsBlocker } from 'react-mower';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DevToolsBlocker>
      <App />
    </DevToolsBlocker>
  </React.StrictMode>
);`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          CursorProtect Example
        </h3>
        <p className="leading-7">
          An example of using the <code>CursorProtect</code> component to prevent cursor-based interactions:
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
      </CursorProtect>
    </div>
  );
}`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          GitHubStarCount Example
        </h3>
        <p className="leading-7">
          An example of using the <code>GitHubStarCount</code> component to display a GitHub star button:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import { GitHubStarCount } from 'react-mower';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Project</h1>
        <p>If you like this project, please star it on GitHub:</p>
        <GitHubStarCount githubStar="jasurhaydarovcode/react-mower" />
      </header>
    </div>
  );
}`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Combining Components
        </h2>
        <p className="leading-7">
          You can combine multiple React Mower components to create a comprehensive protection solution:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { DevToolsBlocker, CursorProtect, GitHubStarCount } from 'react-mower';

function App() {
  return (
    <DevToolsBlocker>
      <div className="App">
        <header className="App-header">
          <h1>Protected Application</h1>
          <GitHubStarCount githubStar="jasurhaydarovcode/react-mower" />
        </header>
        <main>
          <CursorProtect message="Sensitive Content Protected">
            <div className="sensitive-content">
              <h2>Sensitive Information</h2>
              <p>This content is protected from unauthorized access.</p>
            </div>
          </CursorProtect>
          <div className="public-content">
            <h2>Public Information</h2>
            <p>This content is accessible to all users.</p>
          </div>
        </main>
      </div>
    </DevToolsBlocker>
  );
}`}</code>
        </pre>
        <p className="leading-7">
          In this example, the entire application is protected by <code>DevToolsBlocker</code>, the sensitive content
          section is additionally protected by <code>CursorProtect</code>, and the header includes a GitHub star button.
        </p>
      </div>

      <div className="space-y-4 mt-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>
        <p className="leading-7">
          Check out the <Link href="/docs/examples/advanced" className="text-reactmower-blue hover:underline">Advanced Examples</Link> for
          more complex use cases, or explore the <Link href="/docs/api" className="text-reactmower-blue hover:underline">API Reference</Link> for
          detailed information about component props and methods.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/examples/advanced">
            Advanced Examples
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/api">
            Back to API Reference
          </Link>
        </Button>
      </div>
    </div>
  )
}
