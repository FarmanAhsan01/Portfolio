from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str


@app.get("/")
def home():
    return {
        "message": "Portfolio Backend is running!"
    }


@app.post("/contact")
def receive_contact(contact: ContactMessage):
    return {
        "success": True,
        "message": "Contact message received!",
        "data": contact
    }

