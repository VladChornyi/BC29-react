import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../../helpers/api";
import { addProducts, getProducts } from "../../redux/olx/operations.olx";
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

  const addProductSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
      description,
    };
    dispatch(addProducts(product))
    setName(''); setPrice(''); setDescription('');

  };

  return (
    <>
      <Form onSubmit={addProductSubmit}>
        <Input value={name} name="name" onChange={handleChange} type="text" required minLength={3} />
        <Input
          value={price}
          name="price"
          onChange={handleChange}
          type="number"
          required
          min={1}
        />
        <Textarea
          value={description}
          name="description"
          onChange={handleChange}
          required
          minLength={10}
        />
        <Button type="submit">Send</Button>
      </Form>
      <ol>
        {products.map((item) => (
          <li key={item.id + item.name}>
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
