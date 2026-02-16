// // import React from 'react';

// // function Login() {
// //   return (
// //     <div className="container d-flex justify-content-center align-items-center vh-100">
// //       <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '15px' }}>
// //         <h2 className="text-center mb-4 text-primary">Student Login</h2>
// //         <div className="mb-3">
// //           <label className="form-label">Email Address</label>
// //           <input type="email" className="form-control" placeholder="name@university.edu" />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Password</label>
// //           <input type="password" className="form-control" placeholder="Enter password" />
// //         </div>
// //         <button className="btn btn-primary w-100 shadow-sm">Login</button>
// //         <p className="mt-3 text-center">
// //           New student? <a href="/register">Register here</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


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



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 import { Link } from 'react-router-dom'; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      if (res.status === 200) {
        alert("Login Successful!");
        navigate('/dashboard');
      }
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '15px' }}>
        <h2 className="text-center mb-4 text-primary">Student Login</h2>

        <input
          type="email"
          className="form-control my-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control my-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="btn btn-primary w-100">
          Login
        </button>
            
        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <Link to="/register" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;