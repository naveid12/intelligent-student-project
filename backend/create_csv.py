import pandas as pd
import random

data = []

for i in range(100):
    hours = random.randint(1, 10)         # 1 se 10 ghante study
    prev_scores = random.randint(30, 95)  # Purane marks 30 se 95 ke darmiyan
    
    # Logic: Final grade thora sa hours aur scores pe depend karega
    final_grade = (hours * 2) + (prev_scores * 0.8) + random.randint(1, 5)
    
    data.append([hours, prev_scores, round(final_grade, 2)])

# Create DataFrame
df = pd.DataFrame(data, columns=['hours', 'prev_scores', 'final_grade'])

# Save to CSV
df.to_csv('student_data.csv', index=False)
print("student_data.csv file ban gayi hai!")