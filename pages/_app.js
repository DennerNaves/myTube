import { useContext } from 'react';
import GlobalStyle from '../utils/globalStyle';
import { ThemeProvider } from 'styled-components';
import ThemeModeProvider, { ThemeModeContext } from '../utils/themeModeProvider';
import ModalProvider from '../utils/modalProvider';

const theme = {
    light: {
        backgroundBase: '#ffffff',
        backgrondLevel1: '#f0f0f0',
        backgrondLevel2: '#cccccc',
        modalBackground: 'rgba(0, 0, 0, 0.4)',
        borderBase: '#e5e5e5',
        textColorBase: '#222222',
        buttonBackground: '#222222',
        buttonText: '#FFFFFF',
        buttonBackgroundHover: '#cccccc',
        buttonTextHover: '#222222',

    },
    dark: {
        backgroundBase: '#181818',
        backgrondLevel1: '#212121',
        backgrondLevel2: '#313131',
        modalBackground: 'rgba(0, 0, 0, 0.7)',
        borderBase: '#383838',
        textColorBase: '#FFFFFF',
        buttonBackground: '#FFFFFF',
        buttonText: '#222222',
        buttonBackgroundHover: '#cccccc',
        buttonTextHover: '#FFFFFF',
    }
}

const ProviderWrapper = ({children}) => {
    return (
        <ThemeModeProvider initialMode={'light'}>
            {children}
        </ThemeModeProvider>

    )
}

const MyApp = ({ Component, pageProps}) => {
    const themeModeContext = useContext(ThemeModeContext);

    return (
            <ThemeProvider theme={theme[themeModeContext.themeMode]}>
                <ModalProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ModalProvider> 
            </ThemeProvider>
    )
}

export default function _App(props){
    return (
       <ProviderWrapper>
            <MyApp {... props} />
       </ProviderWrapper> 
    )
}; 