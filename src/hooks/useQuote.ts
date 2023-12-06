import useSWR from 'swr';
import ENDPOINTS from '../api/endpoints.ts';
import fetcher from '../api/fetcher.ts';

type QuoteResponseData = {
  data: {
    quote: string;
  };
}

export default function useQuote() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.inspire, fetcher<QuoteResponseData>);

  return {
    quote: data?.data.quote,
    isLoading,
    isError: error,
  };
}
