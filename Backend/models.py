from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from database import Base


class Contact(Base): #Create a database model called Contact.
    __tablename__ = "contacts"#PostgreSQL table name is contacts.

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False) #nullable->Name cannot be empty in the database.
    email = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )