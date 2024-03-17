import styled from 'styled-components';

const StyledHome = styled.div`
    overflow-y: scroll;
    height: ${(props) => props.height + 'px'};

    &::-webkit-scrollbar {
        width: 10px;
    };
    &::-webkit-scrollbar-track {
        background: var(--color-light-grey);
        padding: 5px
    };
    &::-webkit-scrollbar-thumb {
        background: var(--color-medium-grey);
        border-radius: 14px;
         box-shadow: inset 0 0 2px grey;
    };
    &::-webkit-scrollbar-thumb:hover {
        background: var(--color-strong-grey);
    }
`

export default StyledHome;