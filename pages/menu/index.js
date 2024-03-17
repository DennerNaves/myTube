import StyledMenu from './styled';
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';
import Themeswitch from './components/Themeswitch';


function Menu ({searchValue, setSearchValue}) {

    return (
        <StyledMenu>
            <div className='container1'>
                <Logo />
            </div>
            <div className='container2'>
                <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='container3'>
                <Themeswitch />
            </div>
        </StyledMenu>
    )
}

export default Menu;