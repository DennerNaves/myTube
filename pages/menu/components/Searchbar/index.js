import { useState } from 'react';
import StyledSearchbar from './styled';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({searchValue, setSearchValue}) => {
    const [value, setValue] = useState('');

    const handlerFilter = (e) => {
        setValue(e.target.value);
        setSearchValue(e.target.value);
    }
    
    return (
        <StyledSearchbar>
            <input type='text' onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
            <button>
                <SearchIcon />
            </button>
        </StyledSearchbar>
    )
}

export default Searchbar;