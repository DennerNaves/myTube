import Searchbar from './components/Searchbar';
import StyledMenu from './styled';
import Logo from './components/Logo';

function Menu ({searchValue, setSearchValue}) {

    return (
        <StyledMenu>
            <div>
                <Logo />
            </div>
            <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
        </StyledMenu>
    )
}

export default Menu;