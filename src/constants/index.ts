/**
 * Represents the current environment mode for the application.
 *
 * This variable is used to distinguish between development and production modes.
 * It can have one of the following values:
 *
 * - "DEVELOPMENT" for development mode. [default]
 * - "PRODUCTION" for production mode.
 *
 * @type {string}
 * @default "DEVELOPMENT"
 */
export const ENVIRONMENT: string = "DEVELOPMENT";

/**
 * The base URL of the backend server API.
 *
 * This variable stores the base URL for making API requests to the backend server.
 * It is conditionally set based on the current environment (development or production).
 * You can change these URLs to point to the appropriate backend server based on
 * the environment or server location.
 *
 * @type {string}
 * @default ""
 */
export const BACKEND_SERVER_BASE_URL: string =
  ENVIRONMENT === "DEVELOPMENT"
    ? "" // DEV URL
    : ""; // PROD URL
