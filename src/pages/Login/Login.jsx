import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "saimun" && password === "saimun") {
      loginHandler();
      navigate("/");
    } else {
      alert("User input Invalid.");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Use your Credentials!</h2>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
