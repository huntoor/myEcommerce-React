import "./signIn.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


const SignInPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3001/api/login', { username, password }).then((res) => {
            alert("successfully logged in");
            navigate("/");
        }).catch((error) => {
            alert(`${error}: Invalid email or password`);
        });
    }

    return (
        <div className="loginWrapper">
            <h2>Sign in with us</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <br />
                    <input type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Password</label>
                    <br />
                    <input type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
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