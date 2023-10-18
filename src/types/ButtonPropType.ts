/**
 * @author Avinash Gupta [avinashgupta.works@gamil.com]
 * @description ButtonPropType is an interface defining the prop types for a button component.
 */
interface ButtonPropType {
  /**
   * The text label for the button.
   * @default "Button"
   */
  label?: string;

  /**
   * The function to be executed when the button is clicked.
   * @default No action.
   */
  action?: React.MouseEventHandler<
    HTMLButtonElement | HTMLLIElement | HTMLAnchorElement
  >;

  /**
   * This will help in redirection
   * @default No action.
   */
  href?: string;

  /**
   * Additional CSS class name(s) for styling the button.
   * @default None.
   */
  className?: string;

  /**
   * Tell to return either a Link Component or a Button Component
   * @default null.
   */
  link?: string;
}

export default ButtonPropType;
