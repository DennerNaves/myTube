import styled from 'styled-components';

const StyledMenu = styled.header`
    background-color: #FFFFFF;
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 56px;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;
    box-shadow: 0px 4px 6px 3px rgba(0, 0, 0, 0.15);
    gap: 16px;

    .logo {
        left: 0;
        margin-top: 20px;
        position: absolute;
    }
`

export default StyledMenu;
