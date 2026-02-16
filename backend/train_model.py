import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# 1. Load Data from CSV
df = pd.read_csv('student_data.csv')

# 2. Features (Inputs) aur Target (Output) alag karen
# Hum 'hours' aur 'prev_scores' ko use kar rahe hain prediction ke liye
X = df[['hours', 'prev_scores']] 
y = df['final_grade']

# 3. Split Data (Training aur Testing mein taqseem karen)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Train Model
model = LinearRegression()
model.fit(X_train, y_train)

# 5. Save the Model
joblib.dump(model, 'model.pkl')

print("Model trained successfully using CSV data!")