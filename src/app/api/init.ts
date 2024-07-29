export async function initApp() {
  const tgData = window.getTgData();
  if (!tgData) {
    console.error('Telegram Web App data not available');
    if (window.Telegram && window.Telegram.WebApp) {
      console.log('WebApp initData:', window.Telegram.WebApp.initData);
    }
    return null;
  }

  try {
    const response = await fetch('https://paradise.alphacentauri.pro/api/app/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: tgData.Data,
        query: tgData.Query,
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to initialize app');
    }

    const result = await response.json();
    console.log('App initialized successfully', result);

    // Сохраняем токен для дальнейшего использования
    if (result.token) {
      localStorage.setItem('authToken', result.token);
    }

    return result;

  } catch (error) {
    console.error('Error initializing app:', error);
    return null;
  }
}
