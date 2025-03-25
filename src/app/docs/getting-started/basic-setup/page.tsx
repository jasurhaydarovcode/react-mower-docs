import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function BasicSetupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Basic Setup
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Learn how to set up React Mower in your React application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Setting up in main.tsx/jsx
        </h2>
        <p className="leading-7">
          After installing React Mower, you need to set it up in your main file. Here's how you can do it:
        </p>
        <p className="leading-7">
          First, import the necessary styles and components:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import 'react-toastify/dist/ReactToastify.css';
import { DevToolsBlocker } from 'react-mower';`}</code>
        </pre>
        <p className="leading-7">
          Then, wrap your main app component with the <code>DevToolsBlocker</code> component:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DevToolsBlocker>
      <App />
    </DevToolsBlocker>
  </React.StrictMode>
);`}</code>
        </pre>
        <p className="leading-7">
          This setup will block developer tools access in your entire application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Using individual components
        </h2>
        <p className="leading-7">
          If you want to use individual components instead of wrapping your entire application,
          you can import and use them separately. For example, to use the <code>CursorProtect</code> component:
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
          With the <code>message</code> attribute, you can give your own arbitrary name when the screen block is on.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Using GitHub Star Button
        </h2>
        <p className="leading-7">
          You can also use the <code>GitHubStarCount</code> component to display a GitHub star button:
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
          Replace <code>username/repo</code> with your GitHub repository name.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Component Usage Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-semibold">Component</th>
                <th className="py-3 px-4 text-left font-semibold">Import</th>
                <th className="py-3 px-4 text-left font-semibold">Props</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Cursor Protect</td>
                <td className="py-3 px-4 font-mono text-sm bg-muted rounded px-2">
                  {`<CursorProtect />`}
                </td>
                <td className="py-3 px-4">{`{message}`}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">GitHub Star Button</td>
                <td className="py-3 px-4 font-mono text-sm bg-muted rounded px-2">
                  {`<GitHubStarCount />`}
                </td>
                <td className="py-3 px-4">{`{githubStar}, username/repo`}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Dev Tools Blocker</td>
                <td className="py-3 px-4 font-mono text-sm bg-muted rounded px-2">
                  {`<DevToolsBlocker />`}
                </td>
                <td className="py-3 px-4">soon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/components">
            Components
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/getting-started/installation">
            Back to Installation
          </Link>
        </Button>
      </div>
    </div>
  )
}
