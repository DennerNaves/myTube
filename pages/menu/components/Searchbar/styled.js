import styled from 'styled-components';

const StyledSearchbar = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({theme}) => theme.borderBase};
    max-width: 425px;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 100px;
    border-radius: 8px;

    input {
        width: 80%;
        padding: 4px 6px;
        border: none;
        outline: none;
        color: ${({theme}) => theme.textColorBase};
        background-color: ${({theme}) => theme.backgroundBase};
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 600px) {
            width: 64px;
            height: 40px;
        }
    }
`

export default StyledSearchbar;
