import styled from 'styled-components';

export const StyledMenu = styled.header`
    background-color: #FFFFFF;
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    gap: 16px;

    .logo {
        width: 100%;
        max-width: 80px;
    }

    .text {
        fill: #222222;
    }
`
