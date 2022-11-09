import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registration } from "../../redux/auth/auth-operation";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const dispatch = useDispatch();

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    repPassword: setRepPassword,
  };
  const handleInput = (evt) => {
    inputs[evt.target.name](evt.target.value.trim());
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (password === repPassword) {
      const userInfo = {
        name,
        email,
        password,
      };
      dispatch(registration(userInfo));
    } else {
      toast.warn("Упс, паролі не збігаються");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Введіть Ім'я
        <input
          required
          onChange={handleInput}
          name="name"
          value={name}
          type="text"
        />
      </label>
      <label>
        Введіть пошту
        <input
          required
          onChange={handleInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Введіть пароль
        <input
          required
          onChange={handleInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <label>
        Повторіть пароль
        <input
          required
          onChange={handleInput}
          name="repPassword"
          value={repPassword}
          type="password"
        />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
};
