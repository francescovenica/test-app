import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.main.text};
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    &:hover {
      color: red;
    }
  }
`;

export const Menu = styled.div``;
export const SwitchTheme = styled.div`
  padding: 10px;
`;
export const Main = styled.main`
  background-color: ${({ theme }) => theme.main.bg};
  color: ${({ theme }) => theme.main.text};
  min-height: 100vh;
  height: auto;
`;
