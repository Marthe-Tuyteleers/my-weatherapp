import fetcher from './_fetcher';

const mutation = (url, options) => {
  console.log('fetcher args', url, options)

  return fetcher(url, {
    ...options,
    body: JSON.stringify(options.body),
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
};

export default mutation;
