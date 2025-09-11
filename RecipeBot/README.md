# 🤖 RecipeFindBot

**RecipeFindBot** — Telegram‑бот для поиска рецептов, просмотра списка блюд и хранения истории запросов.  
Использует внешний API [TheMealDB](https://www.themealdb.com/) и базу данных для сохранения истории.

## 📌 Возможности

- `/start` — приветствие и запуск бота  
- `/help` — список доступных команд  
- `/recipe_search` — поиск рецепта по названию  
- `/list` — список всех доступных блюд с кнопками для просмотра деталей  
- `/history` — история запросов пользователя  
- Обработка неизвестных команд с подсказкой

## 🛠 Технологии

- Python 3.10+
- [pyTelegramBotAPI](https://github.com/eternnoir/pyTelegramBotAPI)
- requests
- SQLAlchemy
- logging
