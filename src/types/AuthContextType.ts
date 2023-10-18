/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @description Represents the structure of the Authentication Provider.
 */
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  accessToken: string | null;
}

export default AuthContextType;
