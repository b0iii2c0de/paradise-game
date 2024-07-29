export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
      };
    };
    getTgData: () => { Data: string; Query: string } | null;
  }
}

window.getTgData = function () {
  const tg = window.Telegram.WebApp;
  if (tg.initData == null || tg.initData == '') {
    return null;
  }
  
  return {
    Data: tg.initData,
    Query: window.location.search
  };
};
