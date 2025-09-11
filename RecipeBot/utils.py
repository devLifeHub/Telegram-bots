from datetime import datetime
from database import History, Session


# Функция для создания текстового ответа на основе информации о блюде
def response_text(meal):
    return (
        f"Название: {meal['strMeal']}\n"
        f"Категория: {meal['strCategory']}\n"
        f"Инструкция: {meal['strInstructions']}\n"
        f"Изображение: {meal['strMealThumb']}\n"
    )

# Функция для создания записи истории
def create_history_entry(user_id, meal):
    return History(
        user_id=user_id,
        query_time=datetime.now(),
        strMeal=meal['strMeal'],
        strCategory=meal['strCategory'],
        strArea=meal['strArea']
    )

# Функция для обработки найденного рецепта и сохранения его в базу данных
def handle_meal(user_id, meal, chat_id, bot):
    response_text_data = response_text(meal)
    bot.send_message(chat_id, response_text_data)

    with Session() as session:
        history_entry = create_history_entry(user_id, meal)
        session.add(history_entry)
        session.commit()
        import logging
        logging.info(f"Рецепт найден: {meal['strMeal']}")