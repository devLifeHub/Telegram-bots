from telegram.ext import ApplicationBuilder, CommandHandler
from bot.config import TELEGRAM_TOKEN
from bot.commands.start import start

def main():
    app = ApplicationBuilder().token(TELEGRAM_TOKEN).build()

    app.add_handler(CommandHandler("start", start))

    app.run_polling()

if __name__ == "__main__":
    main()
