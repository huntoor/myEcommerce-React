import "./signup.css";

import { Link } from "react-router-dom";

const SignUpPage = () => {

  return (
    <div className="signupWrapper">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home">
        <div>
          <label>Username</label><br />
          <input type="text" name="username" required />
        </div>

        <div>
          <label>Email address</label><br />
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password" name="password" requiredc />
        </div>

        <div>
          <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
        </div>

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