import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function AdvancedExamplesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Advanced Examples
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Explore advanced usage patterns for React Mower components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Conditional Protection
        </h2>
        <p className="leading-7">
          You can conditionally apply protection based on certain conditions, such as authentication state:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React, { useState } from 'react';
import { DevToolsBlocker, CursorProtect } from 'react-mower';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Authentication logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        // Login screen without protection
        <div className="login-screen">
          <h1>Please Log In</h1>
          <button onClick={handleLogin}>Log In</button>
        </div>
      ) : (
        // Protected content after login
        <DevToolsBlocker>
          <CursorProtect message="Protected Area">
            <div className="authenticated-content">
              <h1>Welcome to Protected Area</h1>
              <p>This content is protected from unauthorized access.</p>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </CursorProtect>
        </DevToolsBlocker>
      )}
    </div>
  );
}`}</code>
        </pre>
        <p className="leading-7">
          In this example, the protection is only applied after the user logs in.
          The login screen is accessible without protection.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Protecting Specific Routes
        </h2>
        <p className="leading-7">
          You can apply protection to specific routes in a React Router application:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DevToolsBlocker, CursorProtect } from 'react-mower';

// Public pages
const Home = () => <h1>Home Page (Not Protected)</h1>;
const About = () => <h1>About Page (Not Protected)</h1>;

// Protected pages
const Dashboard = () => <h1>Dashboard (Protected)</h1>;
const PrivateData = () => <h1>Private Data (Protected)</h1>;

// Higher-Order Component for protected routes
const ProtectedRoute = ({ children }) => (
  <DevToolsBlocker>
    <CursorProtect message="Protected Content">
      {children}
    </CursorProtect>
  </DevToolsBlocker>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/private">Private Data</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/private" element={
            <ProtectedRoute>
              <PrivateData />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}`}</code>
        </pre>
        <p className="leading-7">
          This approach allows you to have both protected and unprotected routes in your application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Selective Component Protection
        </h2>
        <p className="leading-7">
          You can apply protection to specific components while leaving others unprotected:
        </p>
        <pre className="p-4 bg-muted rounded-lg overflow-x-auto my-4">
          <code>{`import React from 'react';
import { CursorProtect } from 'react-mower';

function SensitiveComponent() {
  return (
    <CursorProtect message="Sensitive Component">
      <div className="sensitive-content">
        <h2>Sensitive Information</h2>
        <p>This component contains sensitive information that needs protection.</p>
        <ul>
          <li>Secret Data 1</li>
          <li>Secret Data 2</li>
          <li>Secret Data 3</li>
        </ul>
      </div>
    </CursorProtect>
  );
}

function PublicComponent() {
  return (
    <div className="public-content">
      <h2>Public Information</h2>
      <p>This component contains public information that doesn't need protection.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mixed Protection Example</h1>
      </header>
      <main>
        <PublicComponent />
        <SensitiveComponent />
        <PublicComponent />
      </main>
    </div>
  );
}`}</code>
        </pre>
        <p className="leading-7">
          This approach allows you to selectively protect only the components that contain sensitive information.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/">
            Back to Home
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/examples">
            Back to Basic Examples
          </Link>
        </Button>
      </div>
    </div>
  )
}
