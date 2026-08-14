from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import smtplib
from email.message import EmailMessage

load_dotenv()

app = Flask(__name__)

# Allow frontend to connect to backend
CORS(app)


@app.route("/")
def home():
    return "Qelvanta Backend Running"


@app.route("/project-request", methods=["POST"])
def project_request():

    data = request.json

    project = data.get("project")
    name = data.get("name")
    email = data.get("email")
    requirements = data.get("requirements")

    print("\n===== NEW PROJECT REQUEST =====")
    print("Project:", project)
    print("Name:", name)
    print("Client Email:", email)
    print("Requirements:", requirements)

    try:

        message = EmailMessage()

        message["Subject"] = f"New Project Request - {project}"

        message["From"] = os.getenv("MAIL_USERNAME")
        message["To"] = os.getenv("MAIL_USERNAME")

        message.set_content(
            f"""
New Qelvanta Project Request

Project:
{project}

Client Name:
{name}

Client Email:
{email}

Requirements:
{requirements}
"""
        )

        with smtplib.SMTP_SSL(
            "smtp.gmail.com",
            465
        ) as server:

            server.login(
                os.getenv("MAIL_USERNAME"),
                os.getenv("MAIL_PASSWORD")
            )

            server.send_message(message)

        print("EMAIL SENT SUCCESSFULLY!")

        return jsonify({
            "success": True,
            "message": "Project request sent successfully!"
        })

    except Exception as error:

        print("EMAIL ERROR:", error)

        return jsonify({
            "success": False,
            "message": "Unable to send email."
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
