import { useState } from 'react';
import Header from 'header';
import Timeline from 'timeline';
import Menu  from 'menu';
import GlobalStyle from 'globalStyle';

function Homepage(){
    const [searchValue, setSearchValue] = useState('');

    return(
        <div>  
            <GlobalStyle />
            <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
            <Header />
            <Timeline searchValue={searchValue}/>

        </div>
       
    )
}

export default Homepage;
