import  { useState } from 'react';
import axios from 'axios';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [isSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await axios.post(
                    "https://resturant-1.onrender.com/api/v1/login/send",
                    { email, password },
                    { withCredentials: true }
                );
                const token = response.data.token;
                localStorage.setItem("token", token); 
                // Store the token in localStorage

                toast.success("Login Successful! ",{
                    style:{
                        zIndex:9999,
                    }
                });
                navigate("/"); 
            
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="login-container">
            
            <section className='login' id='login'>
            <div className='welcome-header'>
                
                <img src="/full_logo-removebg-preview.jpg" alt="" />
                <h1>FEISTA FLAVOURS CUSINE </h1>

            </div>
                <div className={`container ${isSignIn ? '' : 'active'}`} id="container">
                    <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                         <form onSubmit={handleSubmit}>
                                <h1>Sign In</h1>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <a href="#">Forget Your Password?</a>
                                <button type="submit">
                                Sign In{' '}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                            </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className={`toggle-panel toggle-right ${isSignIn ? '' : 'hidden'}`}>
                                <h1>Hello There!</h1>
                                <p>Register Now to enjoy delicious food....</p>
                                <Link to="/signup">
                                <button>Sign Up</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 "http://localhost:4800/api/v1/login/send",
//                 { email, password },
//                 { withCredentials: true }

//             );
//             const {token } = response.data
//             localStorage.setItem("token",token); 
//             setIsLoggedIn(true); 
//             toast.success("Login successful");

//             navigate("/")
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     };

//     return (
//         <div className="login-container">
//             <section className='login' id='login'>
//                 <div className={`container`} id="container">
//                     <div className={`form-container sign-in`}>
//                         <form onSubmit={handleSubmit}>
//                             <h1>Sign In</h1>
//                             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                             <button type="submit">Sign In</button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default LoginForm ;


