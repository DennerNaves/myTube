import styled from 'styled-components';

const StyledFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   height: 50px;
   width: 100%;
   margin-bottom: 50px;
   background-color: ${({theme}) => theme.backgrondLevel1};

   span {
    color: ${({theme}) => theme.textColorBase || '#222222'}
   }

   div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 10%;
   }

   button {
    background-color: transparent;
    cursor: pointer;
   }
`

export default StyledFooter;
