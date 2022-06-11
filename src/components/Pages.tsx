import { useContext, useState } from "react";
import { PageContext } from "../PageContext";
import { LoginFunction } from "../_types/LoginFunction";
import { UserInfo } from "../_types/UserInfo";
import { Login } from "./Login";
import { Products } from "./Products";
import { Register } from "./Register";

const Pages = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const { page, setPage } = useContext(PageContext);

  const onLogin: LoginFunction = async (username, email, password) => {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUserInfo(await res.json());
    if (res.status === 200) {
      setPage("products");
    }
  };

  return (
    <>
      {
        {
          login: <Login onLogin={onLogin} />,
          products: userInfo ? <Products userInfo={userInfo} /> : null,
          register: <Register />,
        }[page]
      }
    </>
  );
};

export { Pages };
