"use client"

import { FallbackProps } from "react-error-boundary/dist/declarations/src/types";

const FallbackError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <p>Try again: <button onClick={resetErrorBoundary}>Here</button></p>
    </div>
  );
}
FallbackError.displayName = "Error"

export { FallbackError }