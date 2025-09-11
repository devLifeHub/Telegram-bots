import logging

from sqlalchemy import create_engine, Column, String, DateTime, Integer
from sqlalchemy.orm import declarative_base, sessionmaker
from config import DB_URL

# Подключение к базе данных с использованием SQLAlchemy
engine = create_engine(DB_URL)
Base = declarative_base()
Session = sessionmaker(bind=engine)

# Модель базы данных
class History(Base):
    __tablename__ = 'history'
    id = Column(Integer, primary_key=True)
    user_id = Column(String)
    query_time = Column(DateTime)
    strMeal = Column(String)
    strCategory = Column(String)
    strArea = Column(String)

# Создание таблицы в базе данных
Base.metadata.create_all(engine)
logging.info("Таблица базы данных создана")