export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <svg
                className="animate-spin h-12 w-12 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                />
            </svg>
            <p className="mt-4 text-lg text-gray-300 animate-pulse">
                Loading, please wait...
            </p>
        </div>
    );
}