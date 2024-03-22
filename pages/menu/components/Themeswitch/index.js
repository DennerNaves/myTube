import { useContext} from 'react';
import StyledSwitch from './styled';
import { IoIosSunny, IoIosMoon  } from "react-icons/io";
import { ThemeModeContext } from '../../../../utils/themeModeProvider';

const Themeswitch = () => {
    const themeModeContext = useContext(ThemeModeContext);

    return (
        <StyledSwitch>
            <input id='darkmode' type='checkbox' onChange={themeModeContext.toggleThemeMode}/>
            <label
                htmlFor='darkmode'
                className='darkmode-switch'>
                <span><IoIosMoon  style={{color: 'yellow', width: '20px', height: '20px'}}/></span>
                <span><IoIosSunny style={{color: 'orange', width: '20px', height: '20px'}}/></span>
            </label>
        </StyledSwitch>
    )
}

export default Themeswitch;