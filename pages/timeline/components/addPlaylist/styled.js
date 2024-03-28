import styled from 'styled-components';

const StyledForms = styled.form`
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

    .containerTitle {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding: 25px 40px;
        flex-direction: row;
        width: 600px;
        flex-direction: row;
        border-radius: 8px;
    }

    .containerForms{
        width: 100%;
        height: 460px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .containerInput {
        width: 70%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        .errorMessage {
            font-size: var(--font-size-small);
            font-weight: var(--font-weight-normal);
            color: var(--color-light-red);
            margin-left: 12px;
        }

        input {
            width: 100%;
            margin-top: 4px;
        }

        .label {
            font-size: var(--font-size-medium);
            font-weight: var(--font-weight-normal);
            margin-left: 4px;
            color: var(--font-color);
        }

        label {
            width: 100%;
        }
    }

    .inputsContainer {
        display: flex;
        flex-direction: column;
        height: auto;
    }

    .closeButton {
        width: 26px;
        height: 26px;
        padding: 0;
        color: ${({theme}) => theme.textColorBase};
        cursor: pointer;

        :hover {
             color: ${({theme}) => theme.buttonBackgroundHover};
        }
    }

    .addButtonContainer {
        justify-content: flex-end;
        height: 80px;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 25px 40px;
        flex-direction: row;
        width: 100%;
        flex-direction: row;
        border-radius: 8px;
    }

    .addButton {
        width: 100px;
        height: 34px;
        justify-content: center;
        align-items: center;
        padding: 7px 15px;
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-title);
        background-color: ${({theme}) => theme.buttonBackground};
        color: ${({theme}) => theme.buttonText};
        cursor: pointer;
        border-radius: 8px;

        &:hover,
        &:focus {
                background-color: ${({theme}) => theme.buttonBackgroundHover};
                color: ${({theme}) => theme.buttonTextHover};
        }
    }
`

export default StyledForms;