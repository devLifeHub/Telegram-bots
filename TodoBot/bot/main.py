from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler

TOKEN = "7606175164:AAF3mIOhP9vTa4zrlW4hooFpbQ4jvjG62wQ"
URL = "https://devlifehub.github.io/Telegram-bots/TodoMini/#/auth"

async def start(update: Update, context):
    kb = [[InlineKeyboardButton("Open Todo", web_app=WebAppInfo(url=URL))]]
    await update.message.reply_text("WebApp", reply_markup=InlineKeyboardMarkup(kb))


def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()

if __name__ == "__main__":
    main()
