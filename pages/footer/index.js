import { useContext } from 'react';
import StyledFooter from './styled';
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiStyledcomponents  } from "react-icons/si";
import { ThemeModeContext } from '../../utils/themeModeProvider';

function Footer () {
    const themeModeContext = useContext(ThemeModeContext);

    return (
        <StyledFooter>
            <div>
                <a href={'https://react.dev/'} target="_blank" rel="noopener noreferrer">
                    <IoLogoReact style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '28px', height: '28px'} : {color: '#FFFFFF', width: '28px', height: '28px'}} />
                </a>
                <a href={'https://nextjs.org/'} target="_blank" rel="noopener noreferrer">
                    <SiNextdotjs style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '26px', height: '26px'} : {color: '#FFFFFF', width: '26px', height: '26px'}}/>
                </a>
                <a href={'https://styled-components.com/'} target="_blank" rel="noopener noreferrer">
                    <SiStyledcomponents style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '32px', height: '32px'} : {color: '#FFFFFF', width: '32px', height: '32px'}}/>
                </a>
            </div>
        </StyledFooter>
    )
}

export default Footer;