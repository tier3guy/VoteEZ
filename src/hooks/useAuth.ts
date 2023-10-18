import { useContext } from "react";

// Import the AuthContext from the appropriate location in your project
import { AuthContext } from "../providers/AuthProvider";

/**
 * Custom hook for accessing the authentication context.
 * @returns The authentication context provided by the AuthProvider.
 */
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export default useAuth;
