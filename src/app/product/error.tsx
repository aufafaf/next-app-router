"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4">
      <h2>Something went wrong!</h2>
      <button
        className="cursor-pointer bg-gray-600 text-white p-2 rounded-md"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
