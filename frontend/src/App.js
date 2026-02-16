// // import React, { useState } from 'react';
// // import Dashboard from './components/Dashboard';
// // import Predictor from './components/Predictor';
// // import Analytics from './components/Analytics';
// // import './styles/App.css';

// // function App() {
// //   const [activeTab, setActiveTab] = useState('dashboard');
  
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h1>🎓 Intelligent Student Platform</h1>
// //         <p>Machine Learning Powered Student Performance Analysis</p>
// //       </header>
      
// //       <nav className="tabs">
// //         <button 
// //           className={activeTab === 'dashboard' ? 'active' : ''} 
// //           onClick={() => setActiveTab('dashboard')}
// //         >
// //           📊 Dashboard
// //         </button>
// //         <button 
// //           className={activeTab === 'predictor' ? 'active' : ''} 
// //           onClick={() => setActiveTab('predictor')}
// //         >
// //           🔮 Performance Predictor
// //         </button>
// //         <button 
// //           className={activeTab === 'analytics' ? 'active' : ''} 
// //           onClick={() => setActiveTab('analytics')}
// //         >
// //           📈 Analytics
// //         </button>
// //       </nav>
      
// //       <main className="main-content">
// //         {activeTab === 'dashboard' && <Dashboard />}
// //         {activeTab === 'predictor' && <Predictor />}
// //         {activeTab === 'analytics' && <Analytics />}
// //       </main>
      
// //       <footer className="App-footer">
// //         <p>© 2024 Intelligent Student Platform | Machine Learning Project</p>
// //         <p className="status">Backend: <span id="backend-status">Checking...</span></p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post('http://localhost:5000/login', { email, password });
//       if (res.status === 200) {
//         alert("Login Successful!");
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '15px' }}>
//         <h2 className="text-center mb-4 text-primary">Student Login</h2>
        
//         <div className="mb-3">
//           <label className="form-label">Email Address</label>
//           <input 
//             type="email" 
//             className="form-control" 
//             placeholder="name@university.edu"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input 
//             type="password" 
//             className="form-control" 
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button 
//           onClick={handleLogin}
//           className="btn btn-primary w-100 shadow-sm"
//         >
//           Login
//         </button>

//         <p className="mt-3 text-center">
//           New student? <a href="/register">Register here</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;