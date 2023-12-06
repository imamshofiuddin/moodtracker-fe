const options: RequestInit = {
  headers: {
    Accept: 'application/json',
  },
};

const fetcher = <T>(url: string) => fetch(url, options).then((response) => (response.json() as T));

export default fetcher;
