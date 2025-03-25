# React Mower

<div align="center">
  <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png" width="200" />
  <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-angular-language-javascript-static-type-coding-lang-pack-logos-icons-7577992.png" width="200" />
</div>

## React Mower

A powerful React package for protecting your web applications from unwanted developer tools access and cursor-based interactions.

### Features

1. 🛡️ **Block Developer Tools access**
   - Prevent access to browser developer tools through key blocking, context menu blocking, and window size detection.

2. 🖱️ **Cursor protection**
   - Monitor mouse position, block specific keyboard shortcuts, and show protection overlay to prevent unauthorized interactions.

3. 📷 **Block screenshot**
   - Block screenshot attempts to protect sensitive information displayed on the screen.

4. ⭐ **GitHub Star Button Count**
   - Display a GitHub star button to promote your repository and track user engagement.

5. 🪶 **Lightweight and easy to use**
   - Minimal impact on your application's performance while providing powerful protection features.

6. 🔒 **Multiple protection layers**
   - Combine different protection mechanisms to create a comprehensive security solution.

### Installation

```bash
npm install react-mower
```

##### This package requires react-toastify as a peer dependency, but you only need to install react-mower.

## Usage

### Basic Setup

#### Loading in the `main.tsx` component

##### `DevTools Blocker Only` using `main.tsx`

```jsx
import 'react-toastify/dist/ReactToastify.css';
import { DevToolsBlocker } from 'react-mower';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DevToolsBlocker>
      <App />
    </DevToolsBlocker>
  </React.StrictMode>
);
```

### Using Individual Components

#### `Cursor Protection Only`

```jsx
import { CursorProtect } from 'react-mower';

function App() {
  return (
    <CursorProtect message=' Screen Blocked'>
      <YourApp />
    </CursorProtect>
  );
}
```

#### `message`
With the message attribute, you can give your own arbitrary name when the screen block is on.

### Component Usage Table

| Component | Import | Props |
|-----------|--------|-------|
| Cursor Protect | `<CursorProtect />` | {message} |
| GitHub Star Button Count | `<GitHubStarCount />` | {githubStar}, username/repo |
| Dev Tools Blocker | `<DevToolsBlocker />` | soon |

### Components

#### DevToolsBlocker

Prevents access to browser developer tools through:
- F12 key blocking
- Ctrl+Shift+I blocking
- Right-click context menu blocking
- DevTools window size detection

### Security Features

#### DevTools Protection:

- Blocks common DevTools shortcuts
- Prevents right-click context menu
- Detects DevTools through window size changes
- Shows warning toast messages

#### Cursor Protection:

- Monitors mouse position
- Blocks specific keyboard shortcuts
- Shows full-screen protection overlay
- Prevents unauthorized interactions

### Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

### Examples

#### Using All Components Together

```jsx
import 'react-toastify/dist/ReactToastify.css';
import { DevToolsBlocker, CursorProtect, GitHubStarCount } from 'react-mower';

function App() {
  return (
    <DevToolsBlocker>
      <CursorProtect message="Screen Blocked">
        <div>
          <h1>My Protected App</h1>
          <GitHubStarCount githubStar="jasurhaydarovcode/react-mower" />
          {/* Your app content */}
        </div>
      </CursorProtect>
    </DevToolsBlocker>
  );
}
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Support

If you have any questions or need help integrating the package, please open an issue in the GitHub repository.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2025 React Mower. All rights reserved. Created by [Jasur Haydarov](https://github.com/jasurhaydarovcode)
