// Internal Imports
import { Suspense } from "react";

// External Imports
import { Routes, Route } from "react-router-dom";

// Routes
import { APP_ROUTES, AUTH_ROUTES } from "./routes";

// Hooks
import { useAuth } from "./hooks";

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const __routes__ = isLoggedIn ? APP_ROUTES : AUTH_ROUTES;

  return (
    <Suspense>
      <Routes>
        {__routes__.map((__route__, index) => {
          const Page = __route__.element;
          return <Route key={index} path={__route__.path} element={<Page />} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default App;
