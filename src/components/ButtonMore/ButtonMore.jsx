import { isDisabled } from '@testing-library/user-event/dist/utils';

export const ButtonMore = ({ isDisabled, text, onClick }) => {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};
