import { useContext, useState } from "react";
import { MyThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const { theme, darkMode } = useContext(MyThemeContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 8) {
      setSubmitResult("Password must be 8 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("NO");
    } else {
      setSubmitResult("Login Successful");
      navigate("/dash");
    }
  };

  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <h1> Welcome to Log In Page </h1>

      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Use a controlled form input - value AND onChange */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;