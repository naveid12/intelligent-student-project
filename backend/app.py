# from flask import Flask, request, jsonify
# import mysql.connector
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Database Connection
# db = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="your_password",
#     database="student_platform"
# )

# # --- REGISTER ROUTE ---
# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     name = data['name']
#     email = data['email']
#     password = data['password'] # Real project mein yahan hashing use karte hain

#     cursor = db.cursor()
#     try:
#         query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
#         cursor.execute(query, (name, email, password))
#         db.commit()
#         return jsonify({"message": "User registered successfully!"}), 201
#     except Exception as e:
#         return jsonify({"error": "Email already exists!"}), 400

# # --- LOGIN ROUTE ---
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     email = data['email']
#     password = data['password']

#     cursor = db.cursor(dictionary=True)
#     query = "SELECT * FROM users WHERE email = %s AND password = %s"
#     cursor.execute(query, (email, password))
#     user = cursor.fetchone()

#     if user:
#         return jsonify({"message": "Login successful!", "user": user['name']}), 200
#     else:
#         return jsonify({"error": "Invalid email or password"}), 401

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import mysql.connector

# app = Flask(__name__)
# CORS(app)

# model = joblib.load('model.pkl')

# db = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="", # Apna MySQL password yahan likhen
#     database="student_platform"
# )

# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     cursor = db.cursor()
#     query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
#     cursor.execute(query, (data['name'], data['email'], data['password']))
#     db.commit()
#     return jsonify({"message": "User registered!"})

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     cursor = db.cursor(dictionary=True)
#     query = "SELECT * FROM users WHERE email = %s AND password = %s"
#     cursor.execute(query, (data['email'], data['password']))
#     user = cursor.fetchone()
#     if user: return jsonify({"message": "Login Success", "name": user['name']}), 200
#     return jsonify({"error": "Invalid login"}), 401

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json
#     prediction = model.predict([[float(data['hours']), float(data['scores'])]])
#     return jsonify({"predicted_grade": round(prediction[0], 2)})

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import mysql.connector

app = Flask(__name__)
CORS(app)

# ML Model Load karein
model = joblib.load('model.pkl')

# Database Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="", 
    database="student_platform"
)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    cursor = db.cursor()
    try:
        query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
        cursor.execute(query, (data['name'], data['email'], data['password']))
        db.commit()
        return jsonify({"message": "User registered!"}), 201
    except Exception as e:
        return jsonify({"error": "Registration failed or Email already exists"}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    cursor = db.cursor(dictionary=True)
    query = "SELECT * FROM users WHERE email = %s AND password = %s"
    cursor.execute(query, (data['email'], data['password']))
    user = cursor.fetchone()
    if user: 
        return jsonify({"message": "Login Success", "name": user['name']}), 200
    return jsonify({"error": "Invalid login"}), 401

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        # Input ko Float mein convert karna zaroori hai
        prediction = model.predict([[float(data['hours']), float(data['scores'])]])
        return jsonify({"predicted_grade": round(prediction[0], 2)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)