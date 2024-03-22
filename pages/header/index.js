import StyledHeader from './styled';
import Banner from './components/Banner'
import { useContext } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeModeContext } from '../../utils/themeModeProvider';
import jsdata from '../../jsdata.json';

function Header () {
    const themeModeContext = useContext(ThemeModeContext);

    return (
        <StyledHeader>
            <Banner />
            <section className='user-info'>
                <div className='container'>
                    <img src={`https://github.com/${jsdata.github}.png`}/>
                    <div>
                        <span>{jsdata.name}</span>
                        <p>{jsdata.job}</p>
                    </div>
                </div>
               
                <div className='container'>
                    <a href={jsdata.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '26px', height: '26px'} : {color: '#FFFFFF', width: '26px', height: '26px'}} />
                    </a>
                    <a href={jsdata.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={themeModeContext.themeMode == 'light'? {color: '#222222', width: '28px', height: '28px'} : {color: '#FFFFFF', width: '28px', height: '28px'}}/>
                    </a>
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header;