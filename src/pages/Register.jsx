import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FcAddImage } from "react-icons/fc";
import { useState } from "react";

function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Vchat</span>
        <span className="title">Register </span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <FcAddImage size={32} />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span className="warn">Somethig went worng....</span>}
        </form>
        <p>you do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;