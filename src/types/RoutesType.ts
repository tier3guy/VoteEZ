/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @description Represents the structure of a route in a React router configuration.
 */
interface RoutesType {
  __id: string; // A unique identifier for the route.
  exact?: boolean; // Indicates whether the route should match exactly (default is false).
  path: string; // The path at which the route is accessible.
  element: string | React.LazyExoticComponent<React.FC>; // The element (component or layout) associated with the route.
}

export default RoutesType;
