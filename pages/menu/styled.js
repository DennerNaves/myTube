import styled from 'styled-components';

const StyledMenu = styled.header`
    background-color: ${({theme}) => theme.backgroundLevel1};
    border: 1px solid ${({theme}) => theme.borderBase};
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 56px;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 4px 6px 3px rgba(0, 0, 0, 0.15);
    gap: 16px;

    .text {
        fill: ${({theme}) => theme.textColorBase || '#222222'}
    }

    .container1 {
        width: 33%;
        display: flex;
        justify-content: flex-start;
    }

    .container2 {
        width: 33%;
        display: flex;
        justify-content: center;
    }

    .container3 {
        width: 33%;
        display: flex;
        justify-content: flex-end;
        padding-right: 82px;
    }
`

export default StyledMenu;
