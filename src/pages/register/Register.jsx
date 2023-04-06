import React, { useRef, useState } from "react";
import "./register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [dynamicType, setDynamicType] = useState("password");
  const [eye, setEye] = useState(faEye);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleEnd = () => {
    setPassword(passwordRef.current.value);
  };

  const iconChange = () => {
    if (eye === faEye) {
      setEye(faEyeSlash);
      setDynamicType("input");
    } else {
      setEye(faEye);
      setDynamicType("password");
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type={dynamicType}
              placeholder="Password"
              ref={passwordRef}
            />
            <FontAwesomeIcon icon={eye} className="icon" onClick={iconChange} />
            <button className="registerButton" onClick={handleEnd}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
