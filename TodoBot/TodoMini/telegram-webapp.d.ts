export {};

declare global {
  interface TelegramWebApp {
    initData?: string;
    initDataUnsafe?: unknown;
    sendData: (data: string) => void;
    close: () => void;
  }

  interface Telegram {
    WebApp: TelegramWebApp;
  }

  interface Window {
    Telegram?: Telegram;
  }
}
