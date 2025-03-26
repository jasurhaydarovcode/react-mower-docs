import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function DevToolsBlockerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          DevToolsBlocker
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Block access to browser developer tools in your React application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          The <code>DevToolsBlocker</code> component prevents access to browser developer tools through various methods:
        </p>
        <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
          <li>F12 key blocking</li>
          <li>Ctrl+Shift+I blocking</li>
          <li>Right-click context menu blocking</li>
          <li>DevTools window size detection</li>
        </ul>
        <p className="leading-7">
          This component is useful for protecting your web application from unauthorized access and preventing users from inspecting or
          modifying your code through developer tools.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Usage
        </h2>
        <p className="leading-7">
          To use the <code>DevToolsBlocker</code> component, you need to import it and wrap your application with it:
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
        <p className="leading-7">
          When a user tries to access developer tools, the component will detect it and display a warning toast message.
        </p>
        {/* Custom Style Toast */}
        <p className="leading-7">
          <b>Custom Style Toast</b>:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import { DevToolsBlocker } from 'react-mower';

<DevToolsBlocker
  toastOptions={{
  position: "bottom-right",
  autoClose: 3000,
  closeOnClick: false,
  pauseOnHover: true,
  color: "#ff9800"
}}
>
  <App />
</DevToolsBlocker>
    `}</code>
        </pre>
        {/* Custom Style Toast / */}
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Features
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">DevTools Protection</h3>
          <p className="leading-7">
            The DevToolsBlocker component provides the following protection features:
          </p>
          <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Blocks common DevTools shortcuts (F12, Ctrl+Shift+I, etc.)</li>
            <li>Prevents right-click context menu</li>
            <li>Detects DevTools through window size changes</li>
            <li>Shows warning toast messages when DevTools are detected</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Props
        </h2>
        <p className="leading-7">
          The <code>DevToolsBlocker</code> component currently does not accept any props other than <code>children</code>.
          More customization options will be available in future releases.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Example
        </h2>
        <p className="leading-7">
          Here's a complete example of how to use the <code>DevToolsBlocker</code> component in a React application:
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

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/components/cursor-protect">
            Next: CursorProtect
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components">
            Back to Components
          </Link>
        </Button>
      </div>
    </div>
  )
}
