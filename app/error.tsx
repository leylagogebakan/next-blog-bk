"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h2 className="my-4 text-2xl font-bold leading-8">系统出错了！</h2>
        <button
          className="btn btn-primary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          重试
        </button>
        <button className="btn btn-accent ml-4">
          <Link href="/">首页</Link>
        </button>
      </div>
    </div>
  );
}
