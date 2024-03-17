import styled from 'styled-components';

const StyledForms = styled.div`
   h2 {
        font-size: var(--font-size-title);
        font-weight: var(--font-weight-title);
    }

    input {
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-normal);
        height: 34px;
        border-radius: 8px;
        padding: 5px 10px;
        width: 70%;
    }

    div {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding: 25px 40px;
        flex-direction: row;
        width: 100%;
    }

    .inputsContainer {
        display: flex;
        flex-direction: column;
        height: auto;
    }

    .closeButton {
        width: 20px;
        height: 20px;
        padding: 0;
        color: ${({theme}) => theme.textColorBase};
        cursor: pointer;

        :hover {
            color: ${(props) => props.themeMode == 'light'? "#919191" : "#d9d9d9"}
        }
    }

    .addButtonContainer {
        justify-content: flex-end;
    }

    .addButton {
        width: 100px;
        height: 34px;
        justify-content: center;
        align-items: center;
        padding: 7px 15px;
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-title);
        background-color: ${({theme}) => theme.textColorBase};
        color: ${(props) => props.themeMode == 'light'? "#FFFFFF" : "#222222"};
        cursor: pointer;
    }
`

export default StyledForms;