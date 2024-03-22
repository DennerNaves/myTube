import { useState } from 'react';
import StyledSearchbar from './styled';
import { FaSearch } from "react-icons/fa";

const Searchbar = ({searchValue, setSearchValue}) => {

    return (
        <StyledSearchbar>
            <input type='text' onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
            <div>
                <FaSearch />
            </div>
        </StyledSearchbar>
    )
}

export default Searchbar;