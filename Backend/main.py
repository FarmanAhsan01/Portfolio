from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import Base, Contact
from schemas import ContactCreate


app = FastAPI()


# Create database tables
Base.metadata.create_all(bind=engine)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Database session
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Portfolio Backend is running!"
    }


@app.post("/contact")
def receive_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db)
):
    new_contact = Contact(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    return {
        "success": True,
        "message": "Contact message saved successfully!",
        "data": {
            "id": new_contact.id,
            "name": new_contact.name,
            "email": new_contact.email,
            "message": new_contact.message
        }
    }