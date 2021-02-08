import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Button from "../../components/Button";
import { Nav, Main, Menu, SwitchTheme } from "./styles";
import { useAppContext } from "../../context/app";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { theme, isLightTheme, setIsLightTheme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Nav>
          <Menu>
            <Link to="/" title="Home">
              Home
            </Link>
            <Link to="/ranking" title="Ranking">
              Ranking
            </Link>
          </Menu>
          <SwitchTheme>
            <Button
              title={isLightTheme ? "Dark mode" : "Light mode"}
              onClick={() => setIsLightTheme(!isLightTheme)}
            />
          </SwitchTheme>
        </Nav>
        {children}
      </Main>
    </ThemeProvider>
  );
};

export default Layout;
