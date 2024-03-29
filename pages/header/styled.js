import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgrondLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
       display: flex;
       align-items: center;
       width: 100%;
       padding: 16px 50px;
       gap: 16px;
       justify-content: space-between;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    span {
        font-size: var(--font-size-big);
        font-weight: var(--font-weight-title);
    }

    p {
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-normal);
    }
`

export default StyledHeader;
