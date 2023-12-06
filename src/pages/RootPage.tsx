/* eslint-disable linebreak-style */
import reactLogo from '../assets/img/react.svg';
import tailwindCssLogo from '../assets/img/tailwind-css.svg';
import viteLogo from '../assets/img/vite.svg';
import Counter from '../components/Counter.tsx';
import Button from '../components/Button.tsx';

function RootPage() {
  return (
    <div className="max-w-7xl my-0 mx-auto p-8 text-center">
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 w-24 p-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 w-24 p-6" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindCssLogo} className="h-24 w-24 p-6" alt="Tailwind CSS logo" />
        </a>
      </div>
      <h1>Vite + React + Tailwind CSS</h1>
      <div className="p-8 flex items-center justify-center gap-4">
        <Counter />
        <a href="/inspire">
          <Button>
            Inspire
          </Button>
        </a>
      </div>
      <p className="text-gray-400">
        Click on the Vite, React, or Tailwind CSS logos to learn more
      </p>
    </div>
  );
}

export default RootPage;
