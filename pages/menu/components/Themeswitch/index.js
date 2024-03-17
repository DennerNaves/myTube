import { useContext} from 'react';
import StyledSwitch from './styled';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { ThemeModeContext } from '../../../../utils/themeModeProvider';

const Themeswitch = () => {
    const themeModeContext = useContext(ThemeModeContext);

    return (
        <StyledSwitch>
            <input id='darkmode' type='checkbox' onChange={themeModeContext.toggleThemeMode}/>
            <label
                htmlFor='darkmode'
                className='darkmode-switch'>
                <span><ModeNightIcon style={{color: 'yellow', width: '20px', height: '20px'}}/></span>
                <span><LightModeIcon style={{color: 'orange', width: '20px', height: '20px'}}/></span>
            </label>
        </StyledSwitch>
    )
}

export default Themeswitch;