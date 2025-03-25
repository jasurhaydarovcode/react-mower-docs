import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Learn about React Mower and how it can help protect your web applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          What is React Mower?
        </h2>
        <p className="leading-7">
          <span className="font-semibold">React Mower</span> is a powerful React package designed to protect
          your web applications from unwanted developer tools access and cursor-based interactions. It provides
          a robust set of security features to prevent unauthorized access and protect sensitive information.
        </p>
        <p className="leading-7">
          With React Mower, you can block developer tools, prevent cursor-based interactions, protect against
          screenshots, and much more, all while maintaining a smooth user experience for legitimate users.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Key Features
        </h2>
        <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Block Developer Tools Access</strong>: Prevent users from accessing browser developer tools
            through key blocking, context menu blocking, and window size detection.
          </li>
          <li>
            <strong>Cursor Protection</strong>: Monitor mouse position, block specific keyboard shortcuts, and
            show a protection overlay to prevent unauthorized interactions.
          </li>
          <li>
            <strong>Block Screenshots</strong>: Prevent users from taking screenshots of your application.
          </li>
          <li>
            <strong>GitHub Star Button</strong>: Display a GitHub star button to promote your repository.
          </li>
          <li>
            <strong>Lightweight and Easy to Use</strong>: Minimal impact on your application's performance.
          </li>
          <li>
            <strong>Multiple Protection Layers</strong>: Combine different protection mechanisms for comprehensive security.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Browser Compatibility
        </h2>
        <p className="leading-7">
          React Mower is compatible with the following browsers:
        </p>
        <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Chrome (latest)</li>
          <li>Firefox (latest)</li>
          <li>Safari (latest)</li>
          <li>Edge (latest)</li>
          <li>Opera (latest)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Getting Started
        </h2>
        <p className="leading-7">
          To get started with React Mower, you need to install it via npm:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>npm install react-mower</code>
        </pre>
        <p className="leading-7">
          Note that React Mower requires <code>react-toastify</code> as a peer dependency, but you only need to install react-mower.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild>
            <Link href="/docs/getting-started/installation">
              Installation
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/getting-started/basic-setup">
              Basic Setup
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
