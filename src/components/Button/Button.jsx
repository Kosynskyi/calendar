import { StyledButton } from "./Button.styled";

const Button = ({ type, style, onClick, children }) => {
  return (
    <StyledButton type={type} style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
