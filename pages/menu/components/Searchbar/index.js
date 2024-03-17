import { useState } from 'react';
import StyledSearchbar from './styled';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({searchValue, setSearchValue}) => {

    return (
        <StyledSearchbar>
            <input type='text' onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
            <div>
                <SearchIcon />
            </div>
        </StyledSearchbar>
    )
}

export default Searchbar;