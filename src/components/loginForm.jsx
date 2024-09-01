import { Link } from "react-router-dom";

const loginForm = () => {
  return (
    <div className="signIn-div">
      <form className="authForm">
        <h2>Login</h2>
        <div className="formControl">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <p className="message"></p>
        <Link to="/home">
          <button className="btn">Login</button>
        </Link>
        <h6>
          Don't have an account <Link to="/signup">SignUp</Link>
        </h6>
      </form>
    </div>
  );
};

export default loginForm;
