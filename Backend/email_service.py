import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv

load_dotenv()


def send_contact_email(name: str, email: str, message: str):

    smtp_host = os.getenv("EMAIL_HOST")
    smtp_port = int(os.getenv("EMAIL_PORT", 587))
    username = os.getenv("EMAIL_USERNAME")
    password = os.getenv("EMAIL_PASSWORD")
    receiver = os.getenv("EMAIL_RECEIVER")

    msg = EmailMessage()

    msg["Subject"] = f"New Portfolio Contact Message from {name}"
    msg["From"] = username
    msg["To"] = receiver

    msg.set_content(
        f"""
You have received a new message from your portfolio website.

Name:
{name}

Email:
{email}

Message:
{message}
"""
    )

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(username, password)
        server.send_message(msg)