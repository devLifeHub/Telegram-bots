import logging

import requests
import telebot
from telebot import types

from config import API_URL, DETAILS_URL, BOT_TOKEN
from database import History, Session
from utils import handle_meal

bot = telebot.TeleBot(BOT_TOKEN)

# =============== /start ===============
@bot.message_handler(commands=['start'])
def start(message):
    bot.reply_to(message, 'Добро пожаловать в RecipeFindBot!.')
    logging.info("Бот начал работу.")

# =============== /help ===============
@bot.message_handler(commands=['help'])
def help_command(message):
    help_text = (
        "/start - Начать работу с ботом\n"
        "/recipe_search - Поиск рецепта по названию\n"
        "/list - Вывод списка всех блюд\n"
        "/history - Вывод истории запросов\n"
        "/help - Помощь и информация о доступных командах"
    )
    bot.reply_to(message, help_text)
    logging.info("Отправлена справка по командам")

# =============== /recipe_search ===============
@bot.message_handler(commands=['recipe_search'])
def recipe_search(message):
    bot.reply_to(message, 'Пожалуйста, введите название блюда.')
    bot.register_next_step_handler(message, process_recipe_search)

# Обработчик текста запроса на поиск рецепта
def process_recipe_search(message):
    logging.info(f"Получен запрос на поиск рецепта: {message.text}")
    query = message.text.strip()
    if not query:
        bot.reply_to(message, 'Пожалуйста, введите название блюда.')
        logging.info("Название блюда не указано.")
        return

    response = requests.get(API_URL + query)
    data = response.json()

    if data['meals']:
        for meal in data['meals']:
            handle_meal(str(message.from_user.id), meal, message.chat.id, bot)
            logging.info(f"Запрос сохранен в базу данных: {query}")
    else:
        response_text_data = 'Рецепт не найден.'
        bot.reply_to(message, response_text_data)
        logging.info("Рецепт не найден.")
        logging.info(f"Запрос сохранен в базу данных: {query}")

# =============== /list ===============
@bot.message_handler(commands=['list'])
def list_meals(message):
    response = requests.get(API_URL)
    data = response.json()

    if data['meals']:
        markup = types.InlineKeyboardMarkup()
        for meal in data['meals']:
            markup.add(types.InlineKeyboardButton(meal['strMeal'], callback_data=meal['idMeal']))
        bot.send_message(message.chat.id, "Список блюд:", reply_markup=markup)
        logging.info("Список блюд выведен.")
    else:
        bot.reply_to(message, 'Не удалось получить список блюд.')
        logging.info("Не удалось получить список блюд.")

# Обработчик нажатия на кнопку всплывающего меню
@bot.callback_query_handler(func=lambda call: True)
def callback_query(call):
    meal_id = call.data
    response = requests.get(DETAILS_URL + meal_id)
    data = response.json()

    if data['meals']:
        meal = data['meals'][0]
        handle_meal(str(call.from_user.id), meal, call.message.chat.id, bot)
        logging.info(f"Запрос сохранен в базу данных: {meal_id}")
    else:
        bot.send_message(call.message.chat.id, 'Рецепт не найден.')
        logging.info("Рецепт не найден.")

# =============== /history ===============
@bot.message_handler(commands=['history'])
def history_command(message):
    user_id = str(message.from_user.id)
    logging.info(f"Запрос истории для user_id: {user_id}")
    with Session() as session:
        history_records = session.query(History).filter(History.user_id == user_id).all()
        logging.info(f"Найдено записей: {len(history_records)}")

        if history_records:
            history_text = "История запросов:\n\n"
            for record in history_records:
                history_text += (
                    f"Название: {record.strMeal}\n"
                    f"Время запроса: {record.query_time.strftime('%Y-%m-%d %H:%M:%S')}\n"
                    f"Категория: {record.strCategory}\n"
                    f"Регион: {record.strArea}\n"
                    "----------------------------\n\n"
                )
            bot.reply_to(message, history_text)
            logging.info("История запросов отправлена")
        else:
            bot.reply_to(message, 'История запросов пуста.')
            logging.info("История запросов пуста")

# Обработчик для неизвестных команд
@bot.message_handler(func=lambda message: True)
def unknown_command(message):
    bot.reply_to(message, 'Извините, такой команды нет. Используйте /help, чтобы узнать о доступных командах.')
    logging.info("Введена неизвестная команда")

if __name__ == '__main__':
    logging.info("Бот запущен.")
    bot.polling(none_stop=True)
