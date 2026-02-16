// import React, { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/register', formData);
//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response.data.error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
//       <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} />
//       <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/register', formData);
//       alert(res.data.message);
//       navigate('/'); // Register hone ke baad Login page par bhej dega
//     } catch (err) {
//       alert(err.response?.data?.error || "Registration Failed");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow-lg" style={{ width: '400px', borderRadius: '15px' }}>
//         <h2 className="text-center mb-4 text-primary">Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             className="form-control my-2" 
//             placeholder="Full Name" 
//             required
//             onChange={e => setFormData({...formData, name: e.target.value})} 
//           />
//           <input 
//             type="email" 
//             className="form-control my-2" 
//             placeholder="Email Address" 
//             required
//             onChange={e => setFormData({...formData, email: e.target.value})} 
//           />
//           <input 
//             type="password" 
//             className="form-control my-2" 
//             placeholder="Password" 
//             required
//             onChange={e => setFormData({...formData, password: e.target.value})} 
//           />
//           <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
//         </form>
//         <p className="text-center mt-3">
//           Already have an account? <Link to="/">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/register', { name, email, password });
      alert("Registration Successful! Please Login.");
      navigate('/'); // Login page par bhejein
    } catch (err) {
      alert(err.response?.data?.error || "Registration Failed!");
    }
  };

  return (
    <div className="container mt-5">
      <form className="card p-4 shadow" onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" className="form-control my-2" onChange={(e)=>setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="form-control my-2" onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="form-control my-2" onChange={(e)=>setPassword(e.target.value)} required />
        <button className="btn btn-primary mt-3">Sign Up</button>
      </form>
    </div>
  );
}
export default Register;