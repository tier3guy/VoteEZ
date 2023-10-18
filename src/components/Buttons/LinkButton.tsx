// Types
import { ButtonPropType } from "../../types";

/**
 *
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @description LinkButton component is a text button with a primary style. It can be customized with a label, an action, and a custom className.
 *
 * @param label - The text label for the button (default: "Button").
 * @param action - The function to be executed when the button is clicked (default: no action).
 * @param className - Additional CSS class name(s) for styling (default: none).
 */
const LinkButton: React.FC<ButtonPropType> = ({
  label = "Button",
  action = () => {},
  className = "",
  href = "",
}) => {
  return (
    <a
      className={`list-none decoration-none text-gray-500 cursor-pointer hover:underline ${className}`}
      onClick={action}
      href={href}
    >
      {label}
    </a>
  );
};

export default LinkButton;
