import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../../helpers/api";
import { getProducts } from "../../redux/olx/operations.olx";
import { Button, Form, Input, Textarea } from "./Olx.styled";
import { getOlxProducts } from "../../redux/olx/selectors";

const Olx = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const products = useSelector(getOlxProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;

      default:
        break;
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
      description,
    };
    sendData(product);
  };

  return (
    <>
      <Form onSubmit={addProduct}>
        <Input value={name} name="name" onChange={handleChange} type="text" />
        <Input
          value={price}
          name="price"
          onChange={handleChange}
          type="number"
        />
        <Textarea
          value={description}
          name="description"
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
      </Form>
      <ol>
        {products.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
};
export default Olx;
