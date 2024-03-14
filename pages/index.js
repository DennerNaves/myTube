import Header from 'header';
import Timeline from 'timeline';
import Menu  from 'menu';
import GlobalStyle from 'globalStyle';

function Homepage(){
    return(
        <div>  
            <GlobalStyle />
            <Menu />
            <Header />
            <Timeline />

        </div>
       
    )
}

export default Homepage
