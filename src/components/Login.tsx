/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useContext } from "react";
import { PageContext } from "../PageContext";
import { LoginFunction } from "../_types/LoginFunction";

const Login: FC<{ onLogin: LoginFunction }> = ({ onLogin }) => {
  const { setPage } = useContext(PageContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    const email = e.currentTarget.email.value;

    onLogin(username, email, password);
  };

  return (
    <div id="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
      <a
        onClick={() => {
          setPage("register");
        }}
      >
        Register
      </a>
    </div>
  );
};

export { Login };
