import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  getProducts,
  removeProducts,
} from "../../redux/olx/operations.olx";
import { Button, Container, Form, Input, Item, Textarea } from "./Olx.styled";
import { getOlxProducts } from "../../redux/olx/selectors";
import { Radio } from "react-loader-spinner";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Olx = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const idRef = useRef();
  // const [idActive, setIdActive] = useState();

  const products = useSelector(getOlxProducts);
  const status = useSelector((state) => state.olx.status);
  console.log("status :", status);
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
    if (products.some((product) => product.name === name)) {
      return alert(`dublicate product ${name}`);
    }
    dispatch(addProducts(product));
    setName("");
    setPrice("");
    setDescription("");
  };
  const handleDelete = (id) => {
    idRef.current = id;
    // setIdActive(id);
    dispatch(removeProducts(id));
  };

  return (
    <Container>
      <Form onSubmit={addProductSubmit}>
        <Input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          required
          minLength={3}
        />
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
          <Item key={item.id + item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>

            {status === "LOADING" && idRef.current === item.id ? (
              <Radio
                visible={true}
                height="20"
                width="20"
                ariaLabel="radio-loading"
                wrapperStyle={{}}
                wrapperClass="radio-wrapper"
              />
            ) : (
              <button
                type="button"
                id={item.id}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            )}
          </Item>
        ))}
      </ol>
    </Container>
  );
};
export default Olx;
