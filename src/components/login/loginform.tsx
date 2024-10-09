"use client";
import { useState } from "react";
import styles from "../../components/login/loginform.module.css"

const LoginForm: React.FC = () => {
  return (
    // <div className="container">
    //   <div className="sign-in-container">
    //     <h1 className="text-2xl font-bold">Sign In</h1>
    //     <div className="social-container">
    //       <a href="#">
    //         <i className="fab fa-google"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fab fa-facebook-f"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fab fa-linkedin-in"></i>
    //       </a>
    //     </div>
    //     <span>or use your email for registration</span>
    //     <div className="form-container">
    //       <input type="email" placeholder="Email" />
    //       <input type="password" placeholder="Password" />
    //       <a href="#" className="forgot-password">
    //         Forgot Your Password?
    //       </a>
    //       <button>Sign In</button>
    //     </div>
    //   </div>
    //   <div className="sign-up-container">
    //     <h1 className="text-2xl font-bold">Hello, Friend!</h1>
    //     <p>
    //       Register with your personal details to use all of our site features
    //     </p>
    //     <button>Sign Up</button>
    //   </div>
    // </div>
  );
};

export default LoginForm;

// "use client";

// import React, { useState } from "react";
// import styles from "../../components/login/loginform.module.css";
// import { Input } from "antd";

// interface LoginFormProps {
//   // Add any props you want to pass to the LoginForm component
// }

// const LoginForm: React.FC<LoginFormProps> = ({}) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Perform login logic here, e.g., send a request to a server
//     console.log("Username:", username);
//     console.log("Password:", password);
//   };

//   const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Perform signup logic here, e.g., send a request to a server
//     console.log("Username:", username);
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (

//      <div className="container">
//       <div className="signin-signup">
//         <form action="" className="sign-in-form" onSubmit={handleLogin}>
//           <h2 className="title">Sign in</h2>
//           <div className="input-field">
//             <i className="fas fa-user"></i>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="input-field">
//             <i className="fas fa-lock"></i>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <input type="submit" value="Login" className="btn" />
//           <p className="social-text">Or Sign in with social platform</p>
//           <div className="social-media">
//             <a href="#" className="social-icon">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="" className="social-icon">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="" className="social-icon">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="" className="social-icon">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>

//           <button className="btn">
//             <a href="#">Back to Main</a>
//           </button>
//           <p className="account-text">
//             Don't have an account?{" "}
//             <a href="#" id="sign-up-btn2">
//               Sign up
//             </a>
//           </p>
//         </form>
//         <form action="" className="sign-up-form" onSubmit={handleSignup}>
//           <h2 className="title">Sign up</h2>
//           <div className="input-field">
//             <i className="fas fa-user"></i>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="input-field">
//             <i className="fas fa-envelope"></i>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-field">
//             <i className="fas fa-lock"></i>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <input type="submit" value="Sign up" className="btn" />
//           <button className="btn">
//             <a href="indexx.html">Back to Main</a>
//           </button>
//           <p className="social-text">Or Sign in with social platform</p>
//           <div className="social-media">
//             <a href="#" className="social-icon">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="" className="social-icon">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="" className="social-icon">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="" className="social-icon">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <p className="account-text">
//             Already have an account?{" "}
//             <a href="#" id="sign-in-btn2">
//               Sign in
//             </a>
//           </p>
//         </form>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>Member of Kurd GYM?</h3>
//             <p>ZheerSoftware.</p>
//             <button className="btn" id="sign-in-btn">
//               Sign in
//             </button>
//           </div>
//           <img src="signin.svg" alt="" className="image" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>New to Kurd GYM?</h3>
//             <p>First and Best Kurdish GYM Website.</p>
//             <button className="btn" id="sign-up-btn">
//               Sign up
//             </button>
//           </div>
//           <img src="signup.svg" alt="" className="image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
