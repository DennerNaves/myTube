import { useState, useEffect, useContext } from 'react';
import Header from 'header';
import Timeline from 'timeline';
import Menu  from 'menu';
import Footer  from 'footer';
import StyledHome from './styled';
import jsdata from '../jsdata.json';
import SetData from '../utils/services/setData';
import { ModalContext } from '../utils/modalProvider';
import FormsModal from 'timeline/components/FormsModal';

function Homepage(){
    const [searchValue, setSearchValue] = useState(' ');
    const [loading, setLoading] = useState(true);
    const modalState = useContext(ModalContext);

    useEffect(() => {
        setLoading(false);
        SetData('@Data', jsdata.playlists);
    }, []) 

    if(!loading)
    return(
        <div style={{width: '100vw'}}>  
            <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
            <StyledHome height={window.innerHeight}>
                <Header />
                <Timeline searchValue={searchValue}/>
                <Footer />
            </StyledHome>
            {modalState.open && <FormsModal />}
        </div>
       
    )
}

export default Homepage;
