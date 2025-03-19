## **What is React Router?**

**React Router** is a powerful **routing library** for **React** that enables **single-page applications (SPAs)** to navigate between different views or components **without reloading the page**. It provides a seamless and dynamic user experience by managing routing using the **browser’s history**.

### 🔎 **Why Do We Need React Router?**
- React is a **single-page application** framework. Without React Router, navigating between pages would involve **manual state management** or **conditional rendering**.
- React Router makes it easy to map URLs to components using a simple and declarative syntax.
- It allows for building **client-side routing** with support for:
  - Nested routes
  - Dynamic routes
  - Redirects
  - Navigation guards

---

## ✅ **Key Features of React Router**
- **Declarative Routing:** Define routes using components instead of configurations.
- **Nested Routing:** Create nested and hierarchical routes within components.
- **Dynamic Routing:** Match URLs with dynamic data using route parameters.
- **Programmatic Navigation:** Navigate using code (e.g., `useNavigate()`).
- **Protected Routes:** Restrict access to routes using authentication checks.
- **Route-Based Code Splitting:** Load components lazily using `React.lazy()`.

---

## ✅ **Installation**

To install React Router in a React app, use the following command:

```bash
npm install react-router-dom
```

---

## ✅ **Basic Concepts in React Router**
Here are the main components provided by **React Router**:

1. **BrowserRouter**: 
    - It is the top-level component that wraps the entire app to enable routing using the browser's history API.

2. **Routes and Route**: 
    - `Routes` acts as a container for all `Route` components.
    - Each `Route` specifies a path and which component to render.

3. **Link**: 
    - It is used to navigate between routes without refreshing the page.

4. **useNavigate**: 
    - A hook used for programmatic navigation.

5. **useParams**: 
    - A hook to access dynamic parameters from the URL.

---

## ✅ **Example 1: Basic Routing**

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🛠️ **Explanation**
- `BrowserRouter` wraps the app to enable routing.
- `Link` provides client-side navigation without reloading the page.
- `Routes` manages different `Route` components.
- `Route` renders the component based on the matched URL path.

---

## ✅ **Example 2: Dynamic Routing with useParams**

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams(); // Extract the parameter from URL
  return <h2>Welcome, {username}!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user/Skyy">Skyy's Profile</Link> | 
        <Link to="/user/John">John's Profile</Link>
      </nav>
      
      <Routes>
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🛠️ **Explanation**
- `useParams()` fetches the URL parameter (`username`) from the path `/user/:username`.
- Based on the URL, the corresponding user's profile will be displayed.

---

## ✅ **Example 3: Programmatic Navigation with useNavigate**

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about'); // Programmatic navigation
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={goToAbout}>Go to About Page</button>
    </div>
  );
}

function About() {
  return <h2>About Us</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🛠️ **Explanation**
- `useNavigate()` allows programmatic navigation using functions.
- Clicking the button navigates the user to the **About** page.

---

## ✅ **Protected Routes Example**

You can create protected routes to restrict access based on authentication.

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const isAuthenticated = false; // Example authentication status

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

function Dashboard() {
  return <h2>Welcome to Dashboard</h2>;
}

function Home() {
  return <h2>Home Page. Please log in to access the Dashboard.</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🛠️ **Explanation**
- `ProtectedRoute` checks `isAuthenticated`.
- If the user is not authenticated, it redirects to `/` using `<Navigate />`.
- Otherwise, it renders the `<Dashboard />`.

---

## ✅ **Benefits of Using React Router**
- 🚀 Fast and smooth navigation without page reloads.  
- 🛠️ Supports nested and dynamic routes.  
- 🧑‍💻 Improved user experience with clean URLs.  
- ⚙️ Efficient state management using URL parameters.  
- 🔐 Enables route protection with authentication.  

---

## ✅ **Conclusion**  
React Router is an essential library for building modern, dynamic, and responsive web applications using React. With features like dynamic routing, programmatic navigation, and protected routes, it enhances user experience and simplifies state management.

## ✅ **What is the History API?**

The **Browser’s History API** is an essential part of how routing works in **React Router v7**. It allows you to manage the navigation history of your web application programmatically.

The **History API** is a native browser feature that provides access to the session history of the browser. It lets developers manipulate the browser’s URL and navigate between different views **without reloading** the entire page.

It includes methods for:
- Navigating to a new page (`pushState`)
- Replacing the current page (`replaceState`)
- Moving backward and forward through history (`go`, `back`, `forward`)

---

## ✅ **Why is it Important in React Router?**

- React Router uses the History API to create **client-side routing** without sending requests to the server.
- It allows users to navigate between routes without full-page reloads.
- You can maintain state across routes using the History API.

---

## ✅ **Key Methods of the History API**

1. **`pushState()`**
   - Adds a new entry to the browser's history.
   - It updates the URL without reloading the page.
   - Typically used for navigating to a new route.

   ```javascript
   window.history.pushState({ page: 1 }, 'title 1', '/page1');
   ```

2. **`replaceState()`**
   - Replaces the current history entry with a new one.
   - Does not create a new history entry (useful for redirects).

   ```javascript
   window.history.replaceState({ page: 2 }, 'title 2', '/page2');
   ```

3. **`back()`**
   - Navigates to the previous page in history.

   ```javascript
   window.history.back();
   ```

4. **`forward()`**
   - Navigates to the next page in history.

   ```javascript
   window.history.forward();
   ```

5. **`go()`**
   - Moves forward or backward by a specific number of steps.

   ```javascript
   window.history.go(-1); // Go back one step
   window.history.go(2);  // Go forward two steps
   ```

---

## ✅ **How React Router Uses the History API**

React Router abstracts away the direct use of the History API using `useNavigate()` and `useLocation()` hooks.

### 🔎 **Example 1: Using useNavigate (Equivalent to pushState)**

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about'); // Navigates to About using History API
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
🔔 **Explanation:**  
- `useNavigate()` uses `pushState()` under the hood to navigate between routes.
- No full-page reload occurs, and the URL updates seamlessly.

---

### 🔎 **Example 2: Using useNavigate with Replace (Equivalent to replaceState)**

```jsx
const navigate = useNavigate();

// Replace the current route without adding to history
navigate('/dashboard', { replace: true });
```
🔔 **Explanation:**  
- `{ replace: true }` ensures that the current route is replaced in the history, instead of adding a new entry.

---

### 🔎 **Example 3: Using Back and Forward with useNavigate**

```jsx
const navigate = useNavigate();

// Go back to the previous page
const goBack = () => {
  navigate(-1); // Equivalent to window.history.back()
};

// Go forward to the next page
const goForward = () => {
  navigate(1); // Equivalent to window.history.forward()
};
```
🔔 **Explanation:**  
- Passing `-1` or `1` to `navigate()` behaves like the native `history.back()` and `history.forward()` methods.

---

## ✅ **Bonus: Using useLocation()**

- The `useLocation()` hook provides access to the current location object, which contains information about the URL.
- It’s useful for reading query parameters, checking paths, and conditional rendering.

### Example:
```jsx
import { useLocation } from 'react-router-dom';

function CurrentLocation() {
  const location = useLocation();
  
  return (
    <div>
      <h3>Current Path: {location.pathname}</h3>
      <p>Full Location Object: {JSON.stringify(location)}</p>
    </div>
  );
}
```
🔔 **Explanation:**  
- `location.pathname` gets the current path (`/about`, `/home`, etc.).
- `location.search` can be used to extract query parameters.

---

## ✅ **Conclusion**

- The **History API** is a browser feature that React Router leverages to manage client-side routing.
- `useNavigate()`, `useLocation()`, and `<Link>` are abstractions over the History API for seamless routing without reloading the page.
- Understanding how the History API works will help you troubleshoot routing issues and implement advanced navigation patterns.

## **Link vs NavLink in React Router**

In **React Router**, both `Link` and `NavLink` are components used for **client-side navigation** in **Single Page Applications (SPAs)**. While they are similar, they have distinct purposes and use cases.

---

## ✅ **1. Link Component**

### **Purpose:**  
- `Link` is used to **navigate between routes** without causing a full-page reload.
- It is equivalent to the traditional `<a>` tag but prevents the browser from making a server request.
  
### **Example:**  
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🛠️ **Explanation:**  
- `Link` replaces the traditional `<a>` tag for navigation.
- It prevents the page from refreshing and instead renders the correct component using **React Router**.
- The `to` prop defines the URL path.

---

## ✅ **2. NavLink Component**

### **Purpose:**  
- `NavLink` is similar to `Link`, but it provides additional functionality to apply styles or classes when the link is **active**.
- Ideal for **navigation menus** or **sidebars** where the active state needs to be highlighted.

### **Example:**  
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active-link' : 'link'}
        >
          Home
        </NavLink>
        |
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active-link' : 'link'}
        >
          About
        </NavLink>
        |
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'active-link' : 'link'}
        >
          Contact
        </NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🛠️ **Explanation:**  
- `NavLink` uses the `isActive` property to determine if the current URL matches the `to` path.
- The `className` prop applies a conditional class based on whether the link is active or not.
- You can use custom CSS to style active links:
```css
.link {
  color: gray;
  text-decoration: none;
}

.active-link {
  color: blue;
  font-weight: bold;
  text-decoration: underline;
}
```

---

## ✅ **Key Differences Between Link and NavLink**

| **Feature**           | **Link**                          | **NavLink**                                   |
|------------------------|-----------------------------------|---------------------------------------------|
| **Purpose**             | Basic navigation between routes. | Navigation with active state styling.       |
| **Active State**        | No active state recognition.     | Supports active state detection with `isActive`. |
| **Styling**             | No built-in styling capabilities.| Allows applying custom styles using `className` or `style`. |
| **Use Case**            | General navigation links.        | Navigation menus, headers, or sidebars.     |
| **Performance**         | Lightweight and simple.          | Slightly heavier due to active state checking. |
| **Exact Match**         | Not applicable.                  | Supports `end` prop for exact matching.     |

---

## ✅ **When to Use Which?**

- **Use `Link`** when:
  - You don’t need to track the active state.
  - You’re navigating between pages without needing custom styles.

- **Use `NavLink`** when:
  - You’re building a **navigation bar** or **sidebar**.
  - You want to apply styles to highlight the active link.
  - You want to implement **active route indicators** for user experience.

---

## ✅ **Bonus Example: Using NavLink with Inline Styles**

You can directly apply styles using the `style` prop instead of CSS classes:

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? 'blue' : 'gray',
    fontWeight: isActive ? 'bold' : 'normal'
  })}
>
  About
</NavLink>
```
---

## ✅ **Conclusion**

- **`Link`** is a simple and efficient way to navigate between pages in a React app without a page reload.  
- **`NavLink`** is best for creating interactive navigation menus that visually indicate the active page using conditional styles.  
```js
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      {/* Using Link - SPA Navigation */}
      <Link to="/about">Go to About</Link>
      
      {/* Using a - Page Reloads */}
      <a href="/about">Go to About (Page Reload)</a>
    </div>
  );
}
```

### **`Navigate` and `useNavigate` in React Router**

In **React Router (v7)**, `Navigate` and `useNavigate` are used to programmatically navigate between different routes without using traditional links. They are essential for client-side navigation in a **Single Page Application (SPA)**.

---

## ✅ **1. `Navigate` Component**
- The `<Navigate>` component is used for **redirecting** users to a different route.
- It’s often used within a component’s JSX when you need to conditionally navigate.

### 📌 **Syntax**
```jsx
<Navigate to="/path" replace={true} />
```

### 📖 **Props Explanation**  
- **`to`**: The path you want to redirect to.  
- **`replace`**: If `true`, it replaces the current history entry instead of adding a new one.

---

### 🧑‍💻 **Example: Using `<Navigate>` for Redirection**
```jsx
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Welcome to your Dashboard!</h1>;
}

export default Dashboard;
```
🔎 **Explanation**  
- If `loggedIn` is `false`, the user will be redirected to `/login`.  
- The `replace` prop ensures that the previous URL isn’t stored in history.

---

## ✅ **2. `useNavigate` Hook**
- `useNavigate` is a programmatic hook that allows you to navigate within your app using JavaScript logic.  
- Useful for **navigating on button clicks** or **after submitting forms**.  

### 📌 **Syntax**
```jsx
const navigate = useNavigate();
navigate("/path");
```

### 🧑‍💻 **Example: Using `useNavigate` for Navigation**
```jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Welcome Home!</h1>
      <button onClick={handleLogin}>Go to Dashboard</button>
    </div>
  );
}

export default Home;
```
🔎 **Explanation**  
- Clicking the button triggers `navigate("/dashboard")`, which redirects the user without a page reload.  

---

## 🔔 **When to Use `Navigate` vs `useNavigate`**

| Feature              | `<Navigate>`                   | `useNavigate`                       |
|-----------------------|--------------------------------|------------------------------------|
| **Purpose**            | Conditional redirection in JSX| Programmatic navigation with logic|
| **Use Case**           | After login/logout or errors  | After form submission or button click |
| **Replace History**    | `replace={true}` option       | `navigate("/path", { replace: true })` |
| **Access Method**      | JSX Component                 | React Hook                         |

---

## ⚙️ **Bonus: Additional useNavigate Options**
You can also pass state or navigate backward and forward:

- **With State**  
```jsx
navigate("/dashboard", { state: { userId: 123 } });
```
- **Go Back or Forward**  
```jsx
navigate(-1); // Go back one step in history
navigate(1);  // Go forward one step in history
```
---

## **Nested Routing in React Router**

### ✅ **What is Nested Routing?**

- **Nested Routing** is a concept in **React Router** where we can define routes inside other routes.  
- It allows us to build a hierarchy of components that can render child routes within a parent route.  
- Useful for dashboards, user profiles, and any UI with multiple sections.

---

## 🔎 **Why Use Nested Routing?**

- Organizes routes in a clean, structured manner.
- Enables layout sharing (e.g., sidebars, headers, footers) between different views.
- Improves maintainability and code reusability.

---

## ✅ **Step 1: Installation**
Ensure you have **React Router v7** installed:
```bash
npm install react-router-dom
```

---

## ✅ **Step 2: Basic Structure**

Here’s how nested routing generally works:
- **Parent Route**: Contains a shared layout (like a navbar or sidebar).
- **Child Routes**: Renders specific content inside the parent layout using the `<Outlet />` component.

---

## 📦 **Folder Structure Example**
```bash
/src
  ├── App.jsx
  ├── components
  │   ├── Layout.jsx
  │   ├── Dashboard.jsx
  │   ├── Profile.jsx
  │   ├── Settings.jsx
  │   └── NotFound.jsx
  └── index.jsx
```

---

## ✅ **Step 3: Implementing Nested Routes**

### **1. Layout Component (Parent)**  
The parent component uses the `<Outlet />` to display child components.

```jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | {" "}
        <Link to="settings">Settings</Link>
      </nav>
      {/* Outlet will render child routes here */}
      <Outlet />
    </div>
  );
}

export default Layout;
```

---

### **2. Child Components**  

#### **Profile Component**
```jsx
function Profile() {
  return <h2>Profile Page</h2>;
}
export default Profile;
```

#### **Settings Component**
```jsx
function Settings() {
  return <h2>Settings Page</h2>;
}
export default Settings;
```

#### **NotFound Component**
```jsx
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}
export default NotFound;
```

---

## ✅ **Step 4: Set Up Routes Using Nested Routing**

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

## ✅ **Explanation**
1. **Layout Component**:  
    - Acts as the parent route and renders common UI (e.g., header, sidebar).
2. **Outlet**:  
    - Displays the child components (`Profile` and `Settings`) inside the parent layout.
3. **Nested Routes**:  
    - Paths like `/profile` and `/settings` are rendered inside `Layout`.
4. **404 NotFound**:  
    - If no matching route is found, it renders the `NotFound` component.

---

## ✅ **Bonus: Navigate Between Nested Routes with useNavigate**

You can also programmatically navigate within the nested routes using `useNavigate`.

```jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
      <button onClick={() => navigate("/settings")}>Go to Settings</button>
    </div>
  );
}

export default Dashboard;
```

---

## ✅ **Conclusion**
- Nested routing helps in maintaining a clean code structure by logically grouping routes.
- It’s perfect for applications with multiple views under one layout (e.g., admin dashboards, user portals).
- We can customize child routes further using `Outlet` and route parameters.
