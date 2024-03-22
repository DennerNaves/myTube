import styled from 'styled-components';

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${({theme}) => theme.modalBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    color:  ${({theme}) => theme.textColorBase};

    .backgroundContainer {
      width: 600px;
      height: 620px;
      background-color: ${({theme}) => theme.backgrondLevel1};
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      
    }
`

export default StyledBackground;
