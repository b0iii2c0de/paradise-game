import { tgWebApp } from '../telegram/webApp';

export async function initApp() {
  // const initData = tgWebApp.initData;
  const initData = tgWebApp.initDataUnsafe;
  const query = window.location.search;

  // (!initData || Object.keys(initData).length === 0)
  if (!initData) {
    console.error('Telegram Web App data not available');
    return null;
  }

  try {
    const response = await fetch('https://paradise.alphacentauri.pro/api/app/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: JSON.stringify(initData),
        query: query,
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to initialize app');
    }

    const result = await response.json();
    console.log('App initialized successfully', result);

    if (result.token) {
      localStorage.setItem('authToken', result.token);
    }

    return result;

  } catch (error) {
    console.error('Error initializing app:', error);
    return null;
  }
}

