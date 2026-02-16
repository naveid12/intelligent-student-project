# Intelligent Student Performance Platform 🎓

An end-to-end Full-Stack application that uses **Machine Learning** to predict student performance (GPA) based on study hours and previous scores.

## 🚀 Features
* **User Authentication:** Secure Login and Registration system using Flask and MySQL.
* **ML Prediction:** Integrated Linear Regression model to predict GPA in real-time.
* **Modern UI:** Responsive dashboard built with React and Bootstrap.
* **Database Management:** Stores user profiles and performance history.

## 🛠️ Tech Stack
* **Frontend:** React.js, Axios, Bootstrap
* **Backend:** Flask (Python)
* **Machine Learning:** Scikit-learn, Joblib
* **Database:** MySQL (XAMPP/phpMyAdmin)

---

## ⚙️ Setup Instructions

### 1. Database Setup
1. Open **phpMyAdmin**.
2. Create a database named `student_platform`.
3. Import the following SQL structure:
   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100) UNIQUE,
       password VARCHAR(255)
   );

   CREATE TABLE performance_data (
       id INT AUTO_INCREMENT PRIMARY KEY,
       student_id INT,
       hours FLOAT,
       prev_scores FLOAT,
       predicted_result FLOAT,
       FOREIGN KEY (student_id) REFERENCES users(id)
   );