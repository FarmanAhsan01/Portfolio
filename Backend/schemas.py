from pydantic import BaseModel


class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

#     You might ask:

# We already created Contact in models.py. Why are we creating another class?

# Very good question.

# They have different jobs.

# models.py

# Describes the database table.

# models.py
#      ↓
# PostgreSQL
# schemas.py

# Describes the data coming into/out of the API.

# React
#   ↓
# schemas.py
#   ↓
# FastAPI