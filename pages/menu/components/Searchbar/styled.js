import styled from 'styled-components';

const StyledSearchbar = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid var(--font-color);
    max-width: 425px;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;

    input {
        width: 80%;
        padding: 4px 6px;
        border: none;
        outline: none;
        color: var(--font-color);
    }

    button {
        flex: 1;
        cursor: pointer;
        border: none;
        background-color: transparent;
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-left: 1px solid var(--font-color);
        width: 40px;
        height: 40px;

        @media (min-width: 600px) {
            width: 64px;
            height: 40px;
        }
    }
`

export default StyledSearchbar;
