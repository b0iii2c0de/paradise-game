if (!window.Telegram) {
  window.Telegram = {
    WebApp: {
      initData: 'mock_init_data_for_testing',
      initDataUnsafe: {
        user: {
          id: 12345,
          first_name: 'Test',
          last_name: 'User',
          username: 'testuser'
        }
      },
      ready: () => console.log('Mock Telegram WebApp ready'),
      setHeaderColor: () => {},
      requestTheme: () => {},
      requestViewport: () => {}
    }
  };
}

