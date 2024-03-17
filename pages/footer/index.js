import { useContext } from 'react';
import StyledFooter from './styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeModeContext } from '../../utils/themeModeProvider';
import jsdata from '../../jsdata.json';

function Footer () {
    const themeModeContext = useContext(ThemeModeContext);

    return (
        <StyledFooter>
            <div>
                <a href={jsdata.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '26px', height: '26px'} : {color: '#FFFFFF', width: '26px', height: '26px'}} />
                </a>
                <a href={jsdata.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '28px', height: '28px'} : {color: '#FFFFFF', width: '28px', height: '28px'}}/>
                </a>
            </div>
        </StyledFooter>
    )
}

export default Footer;