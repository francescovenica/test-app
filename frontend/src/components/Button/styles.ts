import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: none;
  border: 1px solid #4791db;
  transition: all 600ms;
  padding: 10px;
  &:hover {
    transition: all 600ms;
    background-color: #4791db;
    color: ${({ theme }) => theme.main.text};
  }

  &.active {
    background-color: #4791db;
    color: ${({ theme }) => theme.main.text};
  }
`;
