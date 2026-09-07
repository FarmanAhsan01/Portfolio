import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv() #We don't want to write Databse Url  directly inside Python so we use load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL") #Get the value of DATABASE_URL from the environment.

engine = create_engine(DATABASE_URL) #creates the SQLAlchemy database engine. Think of it as a connection manager between Python and PostgreSQL.


# creates a way for your application to open database sessions.

# A session is basically where we perform operations such as:

# INSERT
# SELECT
# UPDATE
# DELETE
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
#Base-> will be used when we create database models.
Base = declarative_base()