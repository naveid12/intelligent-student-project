# import numpy as np
# from sklearn.ensemble import RandomForestClassifier
# import pickle
# import os

# def create_dummy_model():
#     """Create a simple model for demonstration"""
#     print("Creating dummy model...")
    
#     # Generate synthetic data
#     np.random.seed(42)
#     n_samples = 1000
    
#     # Generate features
#     hours_studied = np.random.normal(3.5, 1.5, n_samples).clip(0, 8)
#     attendance = np.random.normal(85, 10, n_samples).clip(60, 100)
#     previous_scores = np.random.normal(75, 15, n_samples).clip(40, 100)
#     extracurricular = np.random.poisson(1.2, n_samples).clip(0, 3)
#     sleep_hours = np.random.normal(7, 1.2, n_samples).clip(4, 10)
#     sample_papers = np.random.poisson(2, n_samples).clip(0, 5)
    
#     # Combine features
#     X = np.column_stack([
#         hours_studied, attendance, previous_scores,
#         extracurricular, sleep_hours, sample_papers
#     ])
    
#     # Calculate target (performance index 0-3)
#     performance_score = (
#         hours_studied / 8 * 0.3 +
#         attendance / 100 * 0.2 +
#         previous_scores / 100 * 0.4 +
#         sleep_hours / 10 * 0.1
#     )
#     y = np.clip((performance_score * 4).astype(int), 0, 3)
    
#     # Train model
#     model = RandomForestClassifier(
#         n_estimators=100,
#         max_depth=10,
#         random_state=42
#     )
    
#     model.fit(X, y)
    
#     # Save model
#     with open('trained_model.pkl', 'wb') as f:
#         pickle.dump(model, f)
    
#     # Calculate accuracy
#     train_accuracy = model.score(X, y)
    
#     print(f"Model created and saved successfully!")
#     print(f"Training accuracy: {train_accuracy:.2%}")
#     print(f"Number of samples: {n_samples}")
#     print(f"Performance distribution:")
#     for i in range(4):
#         count = (y == i).sum()
#         print(f"  Category {i}: {count} students ({count/n_samples:.1%})")
    
#     return model

# if __name__ == "__main__":
#     create_dummy_model()

# Intelligent Student Platform - model.py
# Predict student final grade based on study hours and previous scores

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle
import os

# -----------------------------
# 1️⃣ Example Dataset (200 students)
# -----------------------------
import random

random.seed(42)
data = {
    "hours": [round(random.uniform(1, 10), 1) for _ in range(200)],
    "prev_scores": [round(random.uniform(40, 95), 1) for _ in range(200)],
}

# Generate final_grade as combination of hours and prev_scores + small noise
data["final_grade"] = [
    round(0.5*data["hours"][i]*10 + 0.5*data["prev_scores"][i] + random.uniform(-5,5), 1)
    for i in range(200)
]

df = pd.DataFrame(data)

# -----------------------------
# 2️⃣ Split Data
# -----------------------------
X = df[["hours", "prev_scores"]]
y = df["final_grade"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# -----------------------------
# 3️⃣ Train Model
# -----------------------------
model = LinearRegression()
model.fit(X_train, y_train)

# -----------------------------
# 4️⃣ Save Model as .pkl
# -----------------------------
pkl_path = os.path.join(os.getcwd(), "model.pkl")
with open(pkl_path, "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved successfully at:", pkl_path)

# -----------------------------
# 5️⃣ Optional: Test Prediction
# -----------------------------
sample_input = [[5, 70]]  # hours=5, prev_scores=70
pred = model.predict(sample_input)
print("Sample Prediction (final grade):", round(pred[0],1))