export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        // удали всё, что ниже для работы в среде tg
        ready: () => void;
        initDataUnsafe: {
          user: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
          };
        };
      };
    };
    getTgData: () => { 
      Data: string; 
      Query: string;
      User?: {
        id: number;
        first_name: string;
      };
    } | null;
  }
}

// window.getTgData = function () {
//   const tg = window.Telegram.WebApp;
//   if (tg.initData == null || tg.initData == '') {
//     return null;
//   }
  
//   return {This object contains data that is transferred to the Mini App when it is opened. It is empty if the Mini App was launched from a keyboard button or from inline mode.
//     Data: tg.initData,
//     Query: window.location.search,
//     // вернуть User?
//   };
// };

window.getTgData = function () {
  if (!window.Telegram || !window.Telegram.WebApp) {
    console.warn('Telegram WebApp is not available');
    return null;
  }
  const tg = window.Telegram.WebApp;
  console.log('Telegram WebApp object:', tg);
  if (!tg.initData) {
    console.warn('Telegram WebApp initData is empty');
    return null;
  }
  
  return {
    Data: tg.initData,
    Query: window.location.search,
  };
};

