
async def start(update, context):
    user_id = update.effective_user.id
    token = context.args[0] if context.args else None

    if token:
        # Сохраняем токен в своей системе (БД, файл, кэш)
        await update.message.reply_text(
            f"✅ Токен получен и сохранён.\n"
            f"Ваш токен:\n`{token}`\n\n"
            "Теперь вы можете использовать команды бота без /login.",
            parse_mode="Markdown"
        )
    else:
        await update.message.reply_text(
            "Привет! Я TodoBot.\n"
            "Доступные команды:\n"
            "/login — авторизация в API\n"
            "/add <текст задачи> — добавить задачу\n"
            "/list — показать список задач\n"
            "/done <id> — отметить задачу выполненной"
        )
