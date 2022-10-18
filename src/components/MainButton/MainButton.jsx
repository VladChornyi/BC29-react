import PropTypes from 'prop-types';
import { Button } from "./MainButton.styled";

export const MainButtom = ({text, light}) => {
  return <Button type="button" light={light}>{text}</Button>;
};

MainButtom.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool,
}