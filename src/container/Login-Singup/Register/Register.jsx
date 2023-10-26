import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const validateForm = () => {
    const newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    if (!usernameRegex.test(formData.username)) {
      newErrors.username = 'Invalid username';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must contain at least 1 letter and 1 digit';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Handle form submission (e.g., send data to a server)
      axios.post("http://127.0.0.1:3001/register",{
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      })
      // .then(result=>console.log(result))
      // .catch(err=>console.log(err));
      .then(response => {console.log(response.data);
        clearForm();
        navigate("/");})
      .catch(error => console.log(error));
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            required
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="button">
          Sign Up
        </button>

        <p className="signUpLink">
                Already have an account? <Link to="/login">Sign Up</Link>
            </p>
      </form>
    </div>
  );
};

export default Register;















// import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./LogReg.css";

// const USER_regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,15}$/
// const PWD_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;

// const LogReg = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user,setUser] = useState("");
//     const [validName,setValidName] = useState(false);
//     const [userFocus,setUserFocus] = useState(false);    //focus on the input field

//     const [pwd,setPwd] = useState("");
//     const [validPwd,setValidPwd] = useState(false);
//     const [pwdFocus,setPwdFocus] = useState(false);

//     const [confirmPwd,setConfirmPwd] = useState("");
//     const [validConfirmPwd,setValidConfirmPwd] = useState(false);
//     const [confirmPwdFocus,setConfirmPwdFocus] = useState(false);

//     const [err,setErr] = useState("");
//     const [success,setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     },[]);

//     useEffect(() => {
//         const result=USER_regex.test(user);
//         setValidName(result);
//     },[user]);

//     useEffect(() => {
//         const result = PWD_regex.test(pwd);
//         setValidPwd(result);
//     }, [pwd]);

//     useEffect(() => {
//         const match = pwd === confirmPwd;
//         setValidConfirmPwd(match);
//     }, [pwd, confirmPwd]);


//     useEffect(() => {
//         setErr("");
//     },[user,pwd,confirmPwd]);

//     function handleSubmit(event) {
//         event.preventDefault();
//         //if button enabled with JS hack
//         const v1=USER_regex.test(user);
//         const v2=PWD_regex.test(pwd);
//         if(!v1 || !v2) {
//             setErr("Invalid username or password or entry")
//             return;
//         }
       
//     }

//     return(
//         <section>
//             <p ref={errRef} className={err?"errMsg" : "offscreen"} aria-live="assertive">
//             {err}</p>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                  <label htmlFor="username"> {/*same as id in input field */}
//                   Username:
//                 <span className={validName ? "valid" : "hide"}>
//                     <FontAwesomeIcon icon={faCheck} />
//                 </span>
//                  <span className={validName || !user ? "hide" : "invalid"}>  {/*if validName is true or user field is empty then hide the red x otherwise invalid class will be applied */}
//                     <FontAwesomeIcon icon={faTimes} />
//                 </span>
//                  </label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(event)=> setUser(event.target.value)}
//                     required
//                     aria-invalid={validName ?"false" : "true"}
//                     aria-describedby="uidnote"
//                     onFocus={()=>setUserFocus(true)}
//                     onBlur={()=>setUserFocus(false)} />

//                 <p id="uidnote" className={userFocus && user && !validName ? "instructions" : 
//                 "offscreen"}>       {/*if userFocus is true and user field is not empty and validName is false then show the instructions otherwise hide it */}
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Username must be 4-15 characters long
//                     contain at least one number
//                     contain at least one special character. 
//                 </p>

//                 <label htmlFor="password">
//                  Password:
//                 <span className={validPwd ? "valid" : "hide"}>
//                      <FontAwesomeIcon icon={faCheck} /></span> {/*if validPwd is true then show the green check mark otherwise hide it */}
//                 <span className={validPwd || !pwd ? "hide" : "invalid"}>
//                     <FontAwesomeIcon icon={faTimes} /> {/*if validPwd is true or pwd field is empty then hide the red x otherwise invalid class will be applied */}
//                 </span>
//                 </label>
//                 <input 
//                     type="password"
//                     id="password"
//                     onChange={(event)=>setPwd(event.target.value)}
//                     required
//                     aria-invalid={validPwd ? "false" : "true"}
//                     aria-describedby="pwdnote"
//                     onFocus={()=>setPwdFocus(true)}
//                     onBlur={()=>setPwdFocus(false)} 
//                 />

//                 <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : 
//                 "offscreen"}>      {/*if pwdFocus is true and pwd field is not empty and validPwd is false then show the instructions otherwise hide it */}
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Password must be 8-15 characters long
//                     contain at least one number
//                     contain at least one uppercase letter
//                     contain at least one lowercase letter
//                     contain at least one special character
//                     allowed special characters are 
//                     <span>!</span> <span>@</span> <span>#</span> <span>$</span> <span>%</span>
//                     <span>^</span> <span>&amp;</span> <span>*</span> <span>.</span>
//                 </p>

//                 <label htmlFor="confirm-password">
//                     Confirm Password:
//                 <span className={validConfirmPwd && confirmPwd ? "valid" : "hide"}>
//                     <FontAwesomeIcon icon={faCheck} />
//                 </span>
//                 <span className={validConfirmPwd || !confirmPwd ? "hide" : "invalid"}>
//                     {/*if validConfirmPwd is true or confirmPwd field is empty then hide the red x otherwise invalid class will be applied */}
//                     <FontAwesomeIcon icon={faTimes} />
//                 </span>
//                 </label>
//                 <input 
//                     type="password"
//                     id="confirm-password"
//                     onChange={(event)=>setConfirmPwd(event.target.value)}
//                     required
//                     aria-invalid={validConfirmPwd ? "false" : "true"}
//                     aria-describedby="confirmpwdnote"
//                     onFocus={()=>setConfirmPwdFocus(true)}
//                     onBlur={()=>setConfirmPwdFocus(false)} 
//                 />

//                 <p id="confirmpwdnote" className={confirmPwdFocus && !validConfirmPwd ? "instructions" :
//                 "offscreen"}>      {/*if confirmPwdFocus is true and confirmPwd field is not empty and validConfirmPwd is false then show the instructions otherwise hide it */}
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     must match the first password input field
//                 </p>
                
//                 <button type="submit" disabled={!validName || !validPwd || !validConfirmPwd ? 
//                 true : false}>
//                     Sign Up
//                 </button>
//             </form>
//             <p>
//                 Already have an account?<br />
//                 <span className="line">
//                     {/* router link */}
//                     <a href="#">Sign In</a>
//                 </span>
//             </p>
//         </section>
//     )
// }
// export default LogReg;



















// {/* <div className="container">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <Login />
//                     </div>
//                     <div className="col-md-6">
//                         <Register />
//                     </div>
//                 </div>
//             </div> */}