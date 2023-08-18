import "./signup.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const SignUpPage = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let isSignedUp = false;

  const addUser = async (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3001/api/create', { username, email, password }).then((res) => {
      alert("loggedin");
      isSignedUp = true;
      navigate("/signin");
    }).catch((error) => {
      alert(`${error}: username already exists`);
    });
  }

  return (
    <div className="signupWrapper">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form onSubmit={addUser}>
        <div>
          <label>Username</label><br />
          <input type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required />
        </div>

        <div>
          <label>Email address</label><br />
          <input type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required />
        </div>

        {/* <div>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a>
          </span>.
        </div> */}

        <div>
          <button id="sub_btn" type="submit">Register</button>
        </div>

      </form>
      <footer>
        <p><Link to="/">Back to Homepage</Link>.</p>
      </footer>
    </div>
  )
}

export default SignUpPage;