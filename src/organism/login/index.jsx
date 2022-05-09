// import React from "react";
// import "./style.css";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
// const Login = () => {

//   const [signin, setSignin] = useState({
// 		username: "",
// 		password: "",
// 	});
// 	const navigate = useNavigate();
// 	const signinFN = () => {
// 		if (signin.username !== "admin@gmail.com") {
// 			setSignin({ ...signin, status: "enter your email" });
// 		} else if (signin.password.length === 0)
// 			setSignin({ ...signin, status: "enter a password" });
// 		else if (signin.password !== "admin")
// 			setSignin({ ...signin, status: "password  wrong" });
// 		else {
// 			console.log("jawik behii");
// 			navigate("/BackOfficeInterface ");
// 		}
// 	};

 
//   return (
//     <div className="parent clearfix">
//       <div className="bg-illustration">
//         <img src="https://cdn.discordapp.com/attachments/902189923380121670/966515718042583080/logooooo.png" alt="logo" />
//       </div>
//       <div className="login">
//         <div className="container">
//           <h1>Welcome to Delisas !</h1>
//           <br />
//           <h3>please sigin-in to your account </h3>
//           <div className="login-form">
//             <form action="">
//               <h5>Email</h5>
//               <input type="email" placeholder="Email "  />
//               <h5>password</h5>
//               <input type="password" placeholder="Password"  />
//               <div className="remember-form">
//                 <input type="checkbox" />
//                 <span> <strong>Remember me</strong></span>
//               </div>
//               <div className="forget-pass">
//                 <br />
//                 {/* <a >Forgot Password ?</a> */}
//               </div>

//               <button className="login" type="submit" >
//                 LOG-IN
//               </button>
//               <div className="footer-social-icons">
//                 <h4 className="_14">Follow us on</h4>
//                 <ul className="social-icons">
//                   <li>
//                     <a href="" className="social-icon">
//                       {" "}
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="" className="social-icon">
//                       {" "}
//                       <i className="fa fa-github"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
=======
const Login = () => {
  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });
  // const navigate = useNavigate();
  const signinFN = () => {
    if (signin.username !== "admin@gmail.com") {
      setSignin({ ...signin, status: "enter your email" });
    } else if (signin.password.length === 0)
      setSignin({ ...signin, status: "enter a password" });
    else if (signin.password !== "admin")
      setSignin({ ...signin, status: "password  wrong" });
    else {
      console.log("jawik behii");
      // navigate("/BackOfficeInterface ");
    }
  };

  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
        <img
          src="https://cdn.discordapp.com/attachments/902189923380121670/966515718042583080/logooooo.png"
          alt="logo"
        />
      </div>
      <div className="login">
        <div className="container">
          <h1>Welcome to Delisas !</h1>
          <br />
          <h3>please sigin-in to your account </h3>

          <div className="login-form">
            <form action="">
              <h5>Email</h5>
              <input type="email" placeholder="Email " />
              <h5>password</h5>
              <input type="password" placeholder="Password" />

              <div className="remember-form">
                <input type="checkbox" />
                <span>
                  {" "}
                  <strong>Remember me</strong>
                </span>
              </div>
              <div className="forget-pass">
                <br />
                {/* <a >Forgot Password ?</a> */}
              </div>

              <button className="login" type="submit">
                LOG-IN
              </button>
              <div className="footer-social-icons">
                <h4 className="_14">Follow us on</h4>
                <ul className="social-icons">
                  <li>
                    <a href="" className="social-icon">
                      {" "}
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className="social-icon">
                      {" "}
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> e2844402e39c6c7be4a6727c4441fe96b7d84473
