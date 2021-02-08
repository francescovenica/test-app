import React, { createContext, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
interface ThemeProps {
  main: {
    text: string;
    bg: string;
  };
}
interface AppContextInterface {
  theme: ThemeProps;
  ranking: Ranking[];
  isLightTheme: boolean;
  setRanking: (list: Ranking[]) => void;
  setIsLightTheme: (state: boolean) => void;
}

const lightTheme = {
  main: {
    text: "#333333",
    bg: "#f1f1f1",
  },
};

const darkTheme = {
  main: {
    text: "#f1f1f1",
    bg: "#333333",
  },
};

export const AppContext = createContext<AppContextInterface>({
  theme: lightTheme,
  setIsLightTheme: () => {},
  setRanking: () => {},
  isLightTheme: false,
  ranking: [],
});
export const useAppContext = () => React.useContext(AppContext);

const AppContextWrapper = ({ children }: Props) => {
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [theme, setTheme] = useState<ThemeProps>(lightTheme);
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  useEffect(() => {
    if (isLightTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [isLightTheme]);

  return (
    <AppContext.Provider
      value={{
        ranking,
        setRanking,
        isLightTheme,
        setIsLightTheme,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
