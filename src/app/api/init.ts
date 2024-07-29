// import '../telegram/webApp';

export async function initApp() {
  const tgData = window.getTgData();
  if (!tgData) {
    console.error('Telegram Web App data not available');
    return;
  }

  try {
    const response = await fetch('https://paradise.alphacentauri.pro/api/app/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tgData),
      credentials: 'include', // This is important for setting cookies
    });

    if (!response.ok) {
      throw new Error('Failed to initialize app');
    }

    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}
