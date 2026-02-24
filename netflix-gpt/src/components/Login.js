import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validateMessage, setValidateMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleValidation = () => {
    //Validate the form data
    const validateData = checkValidData(
      email.current.value,
      password.current.value,
    );
    setValidateMessage(validateData);

    if (validateData !== null) return;

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_small.jpg"
          alt="netflix background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 space-y-4 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? null : (
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 px-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="py-4 px-4 w-full bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-4 px-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold text-lg py-4">{validateMessage}</p>
        <button
          className="py-4 bg-red-600 w-full rounded"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={handleToggle}>
          {isSignInForm
            ? "New to Netflix? Sign up"
            : "Already registered. Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
