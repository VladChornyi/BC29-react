import { useEffect, useState } from 'react';
import { sendData } from '../../helpers/api';
import {
  Button,
  Form,
  Input,
  Textarea,
} from './Olx.styled';

const Olx = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] =
    useState('');

  // const useEffect(()=>.)

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'description':
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
        <Input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
        />
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
    </>
  );
};
export default Olx;
