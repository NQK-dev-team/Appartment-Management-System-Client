import type { RuntimeConfig } from 'nuxt/schema';
import { useRuntimeConfig, defineNuxtPlugin } from '#app';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export default defineNuxtPlugin((nuxtApp) => {
  const config: RuntimeConfig = useRuntimeConfig();
  const isDevMode = config.public.isDevMode as boolean;

  const api = $fetch.create({
    baseURL: 'api',
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    onRequest({ request, options, error }) {
      options.headers.set('Content-Type', 'application/json, multipart/form-data, image/*');
      options.headers.set('Accept', 'application/json, image/*');
    },
    onResponse({ response }) {
      if (isDevMode && response.status < 400) {
        console.log(response);
      }
    },
    onResponseError({ response }) {
      console.error('onResponseError ', {
        endpoint: response.url,
        status: response?.status,
        message: response.statusText,
      });
    },
  });

  return {
    provide: {
      api,
    },
  };
});
