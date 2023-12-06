import Spinner from '../components/Spinner.tsx';
import useQuote from '../hooks/useQuote.ts';
import Button from '../components/Button.tsx';

export default function InspirePage() {
  const { quote, isLoading } = useQuote();

  return (
    <div className="max-w-7xl my-0 mx-auto p-8 flex flex-col items-center justify-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-center">
          {quote}
        </div>
      )}

      <a href="/" className="mt-5">
        <Button>
          Back
        </Button>
      </a>
    </div>
  );
}
