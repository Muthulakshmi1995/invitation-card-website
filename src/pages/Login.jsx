import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login successful!");
  };

  const handleSignup = (e) => {
    e.preventDefault();

    alert("Account created successfully!");
  };

  return (
    <main className="login-page">

      <section className="login-box">

        <div className="login-tabs">

          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>

        </div>

        {activeTab === "login" && (

          <div className="login-content">

            <h2>Login to my Account</h2>

            <form onSubmit={handleLogin}>

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                required
              />

              <button type="submit" className="login-submit">
                Login & Continue
              </button>

            </form>

            <button className="forgot-password">
              Forgot Password
            </button>

          </div>

        )}

        {activeTab === "signup" && (

          <div className="login-content">

            <h2>Create an Account</h2>

            <form onSubmit={handleSignup}>

              <label>Name</label>

              <input
                type="text"
                placeholder="Enter Name"
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    name: e.target.value,
                  })
                }
                required
              />

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter Email"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    email: e.target.value,
                  })
                }
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter Password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  })
                }
                required
              />

              <button type="submit" className="login-submit">
                Create Account
              </button>

            </form>

          </div>

        )}

      </section>

    </main>
  );
}

export default Login;