import "./signIn.css";

import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
      <div className="loginWrapper">
          <h2>Sign in with us</h2>
          <form action="/home">
              <div>
                  <label>Username</label>
                  <br/>
                  <input type="text" name="username" required />
              </div>

              <div>
                  <label>Password</label>
                  <br/>
                  <input type="password" name="password" required />
              </div>

              <div>
                  <button id="sub_btn" type="submit">Login</button>
              </div>
              
          </form>
          
          <footer>
              <p>First time? <Link to="/signUp">Create an account</Link>.</p>
              <p><Link to="/">Back to Homepage</Link>.</p>
          </footer>
      </div>
  )
}

export default SignInPage;