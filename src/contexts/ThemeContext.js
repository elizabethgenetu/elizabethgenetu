import React, { createContext, useState } from 'react';

import { theDarkTheme, theLightTheme } from '../theme/theme';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(theLightTheme);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isLight, setLight] = useState(true);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const changeTheme = () => {
        if (isLight) {
            setTheme(theDarkTheme);
            setLight(false);
        } else {
            setTheme(theLightTheme);
            setLight(true);
        }
    }

    const value = { theme, drawerOpen, setHandleDrawer, changeTheme, isLight }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider