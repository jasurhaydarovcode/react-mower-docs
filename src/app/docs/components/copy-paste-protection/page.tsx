import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function CopyPasteProtectionPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    CopyPasteProtection
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Disables copying and pasting to enhance security.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Overview
                </h2>
                <p className="leading-7">
                    The <code>CopyPasteProtection</code> component prevents users from copying, cutting, pasting,
                    selecting text, or opening the context menu in your application.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Features
                </h2>
                <ul className="space-y-2 my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Prevents copying and cutting</li>
                    <li>Blocks pasting of text</li>
                    <li>Disables text selection</li>
                    <li>Disables right-click context menu</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Usage
                </h2>
                <p className="leading-7">
                    To use the <code>CopyPasteProtection</code> component, simply import and include it at the root of your application:
                </p>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
                    <code>{`import CopyPasteProtection from 'react-mower';

function App() {
  return (
    <CopyPasteProtection />
  );
}`}</code>
                </pre>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Example
                </h2>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
                    <code>{`import React from 'react';
import CopyPasteProtection from 'react-mower';

function App() {
  return (
    <div className="App">
      <CopyPasteProtection />
      <header className="App-header">
        <h1>Protected Content</h1>
        <p>This content cannot be copied, pasted, or right-clicked.</p>
      </header>
    </div>
  );
}

export default App;`}</code>
                </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button asChild>
                    <Link href="/docs/api">
                        Next: Api Reference
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
