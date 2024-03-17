
import { createContext, useState } from 'react';

export const ThemeModeContext = createContext({
    themeMode: '',
    toggleThemeMode:  () => { alert('Você deve encapsular a aplicação antes de continuar!')}
})

const ThemeModeProvider = (props) => {
    const [themeMode, setThemeMode] =  useState(props.initialMode)

    const toggleThemeMode = () => {
        themeMode == 'light'? setThemeMode('dark') : setThemeMode('light');
    }

    return (
        <ThemeModeContext.Provider value={{themeMode: themeMode, toggleThemeMode: toggleThemeMode}}>
            {props.children}
        </ThemeModeContext.Provider>
    )
}

export default ThemeModeProvider;