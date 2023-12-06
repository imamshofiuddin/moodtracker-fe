import ENDPOINTS from "./endpoints";

export function Article() {
  return fetch(ENDPOINTS.article, {
    method: 'GET',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
    },
  });
}

