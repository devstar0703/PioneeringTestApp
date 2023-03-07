import * as React from 'react';

import { useLocalStorage } from 'react-use';

import { darkMode, lightMode } from 'src/utils/theme'; 

const RouteContext = React.createContext({});

export const ThemeModeProvider = ({ children }) => {
    const [themeMode, setSelectThemeMode] = React.useState(lightMode) ;
    const [themeTemp, setThemeTemp] = useLocalStorage('theme_mode', 'light');
    const [barMode, setBarMode] = useLocalStorage('bar_mode', 'expanded');

    const provider = {
        themeMode,
        themeTemp,
        barMode,

        onChangeThemeMode: (themeMode) => {
            if(themeMode === 'light') {
                setSelectThemeMode(lightMode);
                setThemeTemp('light')
            }
            if(themeMode === 'dark') {
                setSelectThemeMode(darkMode);
                setThemeTemp('dark')
            }
        },

        onChangeBarMode: (barMode) => {
            setBarMode(barMode)
        }
    };

    React.useEffect(() => {
        if(themeTemp === 'light') {
            setSelectThemeMode(lightMode);
            setThemeTemp('light')
        }
        if(themeTemp === 'dark') {
            setSelectThemeMode(darkMode);
            setThemeTemp('dark')
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeTemp]);

    return (
        <RouteContext.Provider value={provider}>
            {children}
        </RouteContext.Provider>
    );
};

const useThemeMode = () => React.useContext(RouteContext);

export default useThemeMode;
