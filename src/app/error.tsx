"use client";

import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="flex flex-col items-center p-5 md:p-16 space-y-8">
            <h2> {error.message}</h2>
            <button
                onClick={reset}
                className="bg-primary-500 text-white px-5 py-2 rounded"
            >
                Try again
            </button>
            <Link href='/' className='bg-primary-500 py-2 px-4 text-white rounded-md'>Back to Home</Link>
        </div>
    );
}