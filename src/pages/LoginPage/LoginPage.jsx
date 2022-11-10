import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginOperation } from "../../redux/auth/auth-operation";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginOperation({ email, password }));
  };

  const handleChange = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value);
    } else setPassword(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Пошта</label>
        <input onChange={handleChange} type="text" id="email" value={email} />
        <label htmlFor="password">Пароль</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          value={password}
        />
        <button type="submit">Увійти</button>
      </form>
    </>
  );
};
