// Internal Imports
import React, { createContext, useEffect, useState, useCallback } from "react";

// External Imports
// import { useNavigate } from "react-router-dom";

// Utils
import { getAccessToken } from "../utils/TokenManager";

// Types
import { AuthContextType } from "../types";

// Create an authentication context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

/**
 *
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @description - Authentication Provider Component
 * This component provides authentication-related data to the entire app using React context.
 *
 * @param {React.FC<{ children: React.ReactNode }> children - The child components.
 * @returns {JSX.Element} The Authentication Provider component.
 */
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Navigation Instance -- For Redirection
  // const navigate = useNavigate();

  // States
  const [loading, setLoading] = useState<boolean>(true); // Indicates if authentication data is loading.
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Tells the login status of the user
  const [accessToken, setAccessToken] = useState<string | null>(null); // Keeps the auth token

  // Function to check the user login status
  const checkUserLoginStatus = useCallback(async () => {
    setLoading(true);
    const token = getAccessToken("access_token");
    if (token !== null) {
      setIsLoggedIn(true);
      setAccessToken(token);
      setLoading(false);
    } else setLoading(false);
  }, []);

  // Checks user login status when the component mounts
  useEffect(() => {
    checkUserLoginStatus();
  }, [checkUserLoginStatus]);

  // Controls Redirection
  // useEffect(() => {
  //   if (loading) return; // Before redirection, it is important to confirm the login status
  //   if (!isLoggedIn) {
  //     if (!window.location.pathname.startsWith("/auth")) navigate("/auth");
  //   }
  // }, [isLoggedIn, navigate, loading]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loading,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
