import jsdata from '../../jsdata.json';
import StyledHeader from './styled';
import Banner from './components/Banner'

function Header () {
    return (
        <StyledHeader>
            <Banner />
            <section className='user-info'>
                <img src={`https://github.com/${jsdata.github}.png`}/>

                <div>
                    <span>{jsdata.name}</span>
                    <p>{jsdata.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header;