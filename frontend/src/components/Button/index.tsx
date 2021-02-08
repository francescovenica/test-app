import React from "react";
import { StyledButton } from "./styles";
type Props = {
  title: String;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
};
const Button = ({ title, onClick, disabled, active, ...rest }: Props) => (
  <StyledButton
    className={active ? "active" : ""}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {title}
  </StyledButton>
);

export default Button;
