/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { PageContext } from "../PageContext";

const Register = () => {
  const { setPage } = useContext(PageContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    const email = e.currentTarget.email.value;
    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setPage("login");
    }
  };

  return (
    <div id="container">
      <h1>Register</h1>
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
          setPage("login");
        }}
      >
        Login
      </a>
    </div>
  );
};

export { Register };
