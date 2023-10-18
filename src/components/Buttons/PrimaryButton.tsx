// External Imports
import { Link } from "react-router-dom";

// Types
import { ButtonPropType } from "../../types";

/**
 *
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @description PrimaryButton component is a button with a primary style. It can be customized with a label, an action, and a custom className.
 *
 * @param label - The text label for the button (default: "Button").
 * @param action - The function to be executed when the button is clicked (default: no action).
 * @param className - Additional CSS class name(s) for styling (default: none).
 */
const PrimaryButton: React.FC<ButtonPropType> = ({
  label = "Button",
  action = () => {},
  className = "",
  link = "",
}) => {
  if (link !== "") {
    <Link
      to={link}
      className={`py-2 px-4 min-w-[100px] bg-blue-600 hover:bg-blue-700 rounded-3xl text-white ${className}`}
    >
      {label}
    </Link>;
  }
  return (
    <button
      className={`py-2 px-4 min-w-[100px] bg-blue-600 hover:bg-blue-700 rounded-3xl text-white ${className}`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
