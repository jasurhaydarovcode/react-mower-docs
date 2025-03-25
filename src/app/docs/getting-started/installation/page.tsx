import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Learn how to install React Mower in your project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Prerequisites
        </h2>
        <p className="leading-7">
          Before installing React Mower, make sure you have the following prerequisites:
        </p>
        <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>React</strong>: React Mower is designed to work with React applications.
          </li>
          <li>
            <strong>Node.js and npm</strong>: You need Node.js and npm (or yarn/bun) installed on your system.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Installation with npm
        </h2>
        <p className="leading-7">
          You can install React Mower using npm:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>npm install react-mower</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Installation with yarn
        </h2>
        <p className="leading-7">
          If you prefer yarn, you can install React Mower using:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>yarn add react-mower</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Installation with bun
        </h2>
        <p className="leading-7">
          If you use bun, you can install React Mower using:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>bun add react-mower</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Peer Dependencies
        </h2>
        <p className="leading-7">
          React Mower requires <code>react-toastify</code> as a peer dependency, but you do not need to install it separately.
          It is bundled with React Mower.
        </p>
        <p className="leading-7">
          However, you need to include the CSS for react-toastify in your project:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>import 'react-toastify/dist/ReactToastify.css';</code>
        </pre>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/docs/getting-started/basic-setup">
            Basic Setup
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/getting-started">
            Back to Introduction
          </Link>
        </Button>
      </div>
    </div>
  )
}
