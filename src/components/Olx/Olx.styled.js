import styled from "styled-components";
export const Container = styled.div`
  background-image: url("https://img.freepik.com/premium-photo/shopping-concept-cartons-paper-boxes-blue-shopping-cart-pink-background-online-shopping-consumers-can-shop-from-home-delivery-service-with-copy-space_9635-4088.jpg?w=996");
  /* background-repeat: no-repeat; */
  background-size: contain;
`;
export const Item = styled.li`
  margin-left: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 500px;

  background-color: rgba(226, 165, 165, 0.6);
  gap: 20px;
  padding: 20px;
`;

export const Input = styled.input`
  outline: none;
  color: grey;
  background-color: rgba(30, 30, 30, 0.1);
  height: 25px;
  width: 100%;
  border: 2px solid tomato;
  padding: 2px 5px;
  font-weight: 700;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  outline: none;
  color: grey;
  background-color: rgba(30, 30, 30, 0.1);
  width: 100%;
  height: 70px;
  border: 2px solid tomato;
  padding: 2px 5px;
  resize: none;
  font-weight: 700;
  font-size: 16px;
`;

export const Button = styled.button`
  color: tomato;
  height: 30px;
  width: 200px;
  border: 2px solid tomato;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    color: white;
    background-color: tomato;
  }
  transition: all 250ms linear;
`;
