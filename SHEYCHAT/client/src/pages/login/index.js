import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const login = async () => {
    console.log(user);
  };
  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="bg-white shadow-md p-5 flex flex-col gap-5 w-96">
        <h1 className="text-2xl uppercase font-semibold text-primary">
          Sheychat Login{" "}
        </h1>
        <hr />
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button className="contained-btn" onClick={login}>
          LOGIN
        </button>
        <Link to="/register" className="underline">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
