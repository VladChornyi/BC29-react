import { Button } from './MainButton.styled'

export const MainButton = ({ text, disabled, type, onClick, name, isMain }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      isMain={isMain}
      name={name}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
