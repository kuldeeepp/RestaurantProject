// import { useState } from "react";
// import axios from "axios";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import toast from "react-hot-toast";
// import { Link,useNavigate } from "react-router-dom";

// const SignupForm = () => {
//   const [first, setFirst] = useState("");
//   const [last, setLast] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
//   const navigate = useNavigate();

  

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4800/api/v1/signup/send",
//         { first, last, email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setFirst("");
//       setLast("");
//       setEmail("");
//       setPassword("");
//       navigate("/success"); // Redirect to login page after successful signup
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section className="signup" id="signup">
//       <div className="container">
//         <div className="banner">
//           <img src="/signup.png" alt="signup" />
//         </div>
//         <div className="banner">
//           <div className="signup_form_box">
//             <h1>Create an Account</h1>
//             <form onSubmit={handleSignup}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={first}
//                   onChange={(e) => setFirst(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={last}
//                   onChange={(e) => setLast(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button type="submit">
//                 Sign Up{" "}
//                 <span>
//                   <HiOutlineArrowNarrowRight />
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignupForm;


import  { useState } from 'react';
import axios from 'axios';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [first, setFirstName] = useState('');
    const [last, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://resturant-1.onrender.com/api/v1/signup/send",
                { first, last, email, password },
                {
                    
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
            );
            toast.success(data.message,{
                style:{
                    zIndex:9999,
                }
            });
            setFirstName("");
            setEmail("");
            setLastName("");
            setPassword("");
            navigate("/login");
        } catch (error) {
            toast.error(error.response.data.message,{
                style:{
                    zIndex:9999,
                    
                }
            });
        }
    };

    return (
        <div className="login-container">
        <section className="login" id="login">
        <div className='welcome-header'>
                
                <img src="public/full_logo-removebg-preview.jpg" alt="" />
                <h1>FEISTA FLAVOURS CUSINE </h1>

            </div>
            <div className={`container ${isSignIn ? '' : 'active'}`} id="container">
                <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>

                        <form onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <input type="text" placeholder="First Name" value={first} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" value={last} onChange={(e) => setLastName(e.target.value)} />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">
                                Sign Up{' '}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                    <div className={`toggle-panel toggle-left ${isSignIn ? 'hidden' : ''}`}>
                                <h1>Welcome Back!</h1>
                                <p>Enter your details</p>
                                <Link to="/login">
                                    <button>Sign In</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default SignupForm;
