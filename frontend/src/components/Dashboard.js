// function Dashboard({ predictionResult }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Input Form Column */}
//         <div className="col-md-6">
//           <div className="card p-4 border-0 shadow">
//             <h3>Analyze Performance</h3>
//             <input type="number" className="form-control my-3" placeholder="Daily Study Hours" />
//             <input type="number" className="form-control my-3" placeholder="Mid-term Marks" />
//             <button className="btn btn-success">Predict Result</button>
//           </div>
//         </div>

//         {/* Prediction Display Column */}
//         <div className="col-md-6">
//           <div className="card p-4 bg-light border-0 shadow text-center">
//             <h3>Predicted GPA</h3>
//             <h1 className="display-1 text-success font-weight-bold">
//               {predictionResult || "0.0"}
//             </h1>
//             <div className="progress mt-3">
//               <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Dashboard

import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [hours, setHours] = useState('');
  const [scores, setScores] = useState('');
  const [prediction, setPrediction] = useState('0.0');

  const handlePredict = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', {
        hours: hours,
        scores: scores
      });
      // Backend se 'predicted_grade' aa raha hai
      setPrediction(res.data.predicted_grade);
    } catch (err) {
      alert("Prediction failed! Check if Backend is running.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow">
            <h3>Analyze Performance</h3>
            <input 
              type="number" 
              className="form-control my-3" 
              placeholder="Daily Study Hours" 
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <input 
              type="number" 
              className="form-control my-3" 
              placeholder="Mid-term Marks" 
              value={scores}
              onChange={(e) => setScores(e.target.value)}
            />
            <button className="btn btn-success" onClick={handlePredict}>Predict Result</button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-4 bg-light border-0 shadow text-center">
            <h3>Predicted Percentage</h3>
            <h1 className="display-1 text-success font-weight-bold">
              {prediction}%
            </h1>
            <div className="progress mt-3">
              <div className="progress-bar bg-success" style={{ width: `${prediction}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;