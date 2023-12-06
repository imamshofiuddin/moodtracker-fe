/* eslint-disable linebreak-style */
import { useRouteError } from 'react-router-dom';

type Error = {
  status?: number;
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error: Error = useRouteError() as Error;

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 w-full">
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
          <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
            {error.status}
          </div>

          <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
            {error.statusText}
          </div>
        </div>
      </div>
    </div>
  );
}
