import React from 'react';

import {Colors} from './colors';
import Typography from './typography';

const ThemeContext = React.createContext({
  fonts: Typography,
  colors: Colors,
});

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: IThemeProvider) => {
  const themeData = React.useMemo(() => {
    return {
      fonts: Typography,
      colors: Colors,
    };
  }, []);

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
