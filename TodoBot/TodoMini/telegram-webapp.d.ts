export {};

declare global {
  interface TelegramWebApp {
    sendData: (data: string) => void;
  }

  interface Telegram {
    WebApp: TelegramWebApp;
  }

  const Telegram: Telegram;
}
