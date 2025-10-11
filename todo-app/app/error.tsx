'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <html lang={'en'}>
      <body
        dir={'ltr'}
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 text-center max-w-md w-[90%]">
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
            {'Something went wrong!'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {'Sorry, an unexpected error occurred while loading the page.'}
          </p>

          {error?.digest && (
            <p className="text-sm text-gray-400 mb-4">
              {'Error code:'}{' '}
              <span className="font-mono">{error.digest}</span>
            </p>
          )}

          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition dark:bg-red-600 dark:hover:bg-red-700"
          >
            {'Try again'}
          </button>
        </div>
      </body>
    </html>
  )
}
