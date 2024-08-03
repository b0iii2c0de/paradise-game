import WebApp from '@twa-dev/sdk'
export const mockWebApp: Partial<typeof WebApp> = {
  initData: 'mock_init_data_for_testing',
  initDataUnsafe: {
    query_id: 'mock_query_id',
    user: {
      id: 12345,
      is_bot: false,
      first_name: 'test_user',
      last_name: 'test_user_last_name',
      username: 'test_user_username',
      is_premium: false,
    },
    auth_date: 1630452000,
    hash: 'mock_hash',
  },
  isVerticalSwipesEnabled: false,
  sendData: (data: unknown) => console.log('Mock sendData:', data),
  ready: () => console.log('Mock Telegram WebApp ready'),
}
