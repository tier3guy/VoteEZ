// Internal Imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// External Imports
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// Styles
import "./index.css";

// Providers
import AuthProvider from "./providers/AuthProvider";

// App Component
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ThirdwebProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </ThirdwebProvider>
  </StrictMode>
);
