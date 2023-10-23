import { useState,useEffect,useRef } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LogReg.css";

const USER_regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,15}$/
const PWD_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;

const LogReg = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState("");
    const [validName,setValidName] = useState(false);
    const [userFocus,setUserFocus] = useState(false);    //focus on the input field

    const [pwd,setPwd] = useState("");
    const [validPwd,setValidPwd] = useState(false);
    const [pwdFocus,setPwdFocus] = useState(false);

    const [confirmPwd,setConfirmPwd] = useState("");
    const [validConfirmPwd,setValidConfirmPwd] = useState(false);
    const [confirmPwdFocus,setConfirmPwdFocus] = useState(false);

    const [err,setErr] = useState("");
    const [success,setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[]);

    useEffect(() => {
        const result=USER_regex.test(user);
        setValidName(result);
    },[user]);

    useEffect(() => {
        const result=PWD_regex.test(pwd);
        setValidPwd(result);
        const match=pwd===confirmPwd;
        setValidPwd(match);
    },[pwd,confirmPwd]);

    useEffect(() => {
        setErr("");
    },[user,pwd,confirmPwd]);

    return(
        <section>
            <p ref={errRef} className={err?"errMsg" : "offscreen"} aria-live="assertive">
            {err}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                 <label htmlFor="username"> {/*same as id in input field */}
                  Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                 <span className={validName || !user ? "hide" : "invalid"}>  {/*if validName is true or user field is empty then hide the red x otherwise invalid class will be applied */}
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                 </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(event)=> setUser(event.target.value)}
                    required
                    aria-invalid={validName ?"false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={()=>setUserFocus(true)}
                    onBlur={()=>setUserFocus(false)} />

                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : 
                "offscreen"}>       {/*if userFocus is true and user field is not empty and validName is false then show the instructions otherwise hide it */}
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Username must be 4-15 characters long
                    contain at least one number
                    contain at least one special character. 
                </p>

                <label htmlFor="password">
                 Password:
                <span className={validPwd ? "valid" : "hide"}>
                     <FontAwesomeIcon icon={faCheck} /></span> {/*if validPwd is true then show the green check mark otherwise hide it */}
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} /> {/*if validPwd is true or pwd field is empty then hide the red x otherwise invalid class will be applied */}
                </span>
                </label>
                <input 
                    type="password"
                    id="password"
                    onChange={(event)=>setPwd(event.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={()=>setPwdFocus(true)}
                    onBlur={()=>setPwdFocus(false)} 
                />

                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : 
                "offscreen"}>      {/*if pwdFocus is true and pwd field is not empty and validPwd is false then show the instructions otherwise hide it */}
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Password must be 8-15 characters long
                    contain at least one number
                    contain at least one uppercase letter
                    contain at least one lowercase letter
                    contain at least one special character
                    allowed special characters are 
                    <span>!</span> <span>@</span> <span>#</span> <span>$</span> <span>%</span>
                    <span>^</span> <span>&amp;</span> <span>*</span> <span>.</span>
                </p>

                <label htmlFor="confirm-password">
                    Confirm Password:
                <span className={validConfirmPwd && confirmPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validConfirmPwd || !confirmPwd ? "hide" : "invalid"}>
                    {/*if validConfirmPwd is true or confirmPwd field is empty then hide the red x otherwise invalid class will be applied */}
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                </label>
                <input 
                    type="password"
                    id="confirm-password"
                    onChange={(event)=>setConfirmPwd(event.target.value)}
                    required
                    aria-invalid={validConfirmPwd ? "false" : "true"}
                    aria-describedby="confirmpwdnote"
                    onFocus={()=>setConfirmPwdFocus(true)}
                    onBlur={()=>setConfirmPwdFocus(false)} 
                />

                <p id="confirmpwdnote" className={confirmPwdFocus && !validConfirmPwd ? "instructions" :
                "offscreen"}>      {/*if confirmPwdFocus is true and confirmPwd field is not empty and validConfirmPwd is false then show the instructions otherwise hide it */}
                    <FontAwesomeIcon icon={faInfoCircle} />
                    must match the first password input field
                </p>
                
                <button type="submit" disabled={!validName || !validPwd || !validConfirmPwd ? 
                true : false}>
                    Sign Up
                </button>
            </form>
            <p>
                Already have an account?<br />
                <span className="line">
                    {/* router link */}
                    <a href="#">Sign In</a>
                </span>
            </p>
        </section>
    )
}



















{/* <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Login />
                    </div>
                    <div className="col-md-6">
                        <Register />
                    </div>
                </div>
            </div> */}