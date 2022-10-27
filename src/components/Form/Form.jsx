import { useRef, useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const nameInput = useRef();
  const emailInput = useRef();
  const telInput = useRef();

  const handleKeydown = (event) => {
    console.log("event.target.name", event.target.name);
    if (event.key === "Enter") {
      switch (event.target.name) {
        case "name":
          emailInput.current.focus();
          break;
        case "email":
          telInput.current.focus();
          break;
        case "number":
          nameInput.current.focus();
          break;
        default:
          return null;
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={handleKeydown}
        ref={nameInput}
        value={name}
        type="text"
        name="name"
      />
      <input
        onKeyDown={handleKeydown}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        ref={emailInput}
        value={email}
        type="email"
        name="email"
      />
      <input
        onKeyDown={handleKeydown}
        onChange={(e) => {
          setTel(e.target.value);
        }}
        ref={telInput}
        value={tel}
        type="tel"
        name="number"
      />
    </div>
  );
};
