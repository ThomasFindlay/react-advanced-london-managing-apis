import { merge } from 'lodash-es';

const baseURL = 'https://jsonplaceholder.typicode.com/';

const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const resolveUrl = url => `${baseURL}${url}`;

const execRequest = async (url, config) => {
  const response = await fetch(resolveUrl(url), merge(defaultConfig, config));

  if (!response.ok) throw response;

  return response.json();
};

const withAbort =
  fn =>
  async (...args) => {
    const originalConfig = args[args.length - 1];
    // Extract abort property from the config
    let { abort, ...config } = originalConfig;

    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === 'function') {
      const { signal, abort } = new AbortController();

      config.signal = signal;
      abort(abort);
    }

    try {
      // Pass all arguments from args besides the config
      return await fn(...args.slice(0, args.length - 1), config);
    } catch (error) {
      console.log('err', error.message, Object.keys(error));
      console.error(error);
      // Add "aborted" property to the error if the request was cancelled
      // didAbort(error) && (error.aborted = true);
      throw error;
    }
  };

const api = () => {
  return {
    get: (url, config) => {
      // return withAbort(execRequest)(url, {
      //   method: 'GET',
      //   ...config,
      // });
      return execRequest(url, {
        method: 'GET',
        ...config,
      });
    },
    post: (url, body, config) => {
      return withAbort(execRequest)(url, {
        method: 'POST',
        body: JSON.stringify(body),
        ...config,
      });
    },
    put: (url, body, config) => {},
    patch: (url, body, config) => {},
    delete: (url, config) => {},
  };
};

export default api();
