import styled from 'styled-components';

const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    img {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 210px;
        height: auto;
    }

    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;

        div {
            width: calc(100vw - 16px * 4);
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(200px, 1fr);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            margin-left: 15px;

            &::-webkit-scrollbar {
                height: 7px;
            };
            &::-webkit-scrollbar-track {
                background: var(--color-light-grey);
                padding: 5px;

            };
            &::-webkit-scrollbar-thumb {
                background: var(--color-medium-grey);
                border-radius: 14px;
                 box-shadow: inset 0 0 2px grey;
            };
            &::-webkit-scrollbar-thumb:hover {
                background: var(--color-strong-grey);
            }

            a {
                scroll-snap-align: start;
                
                span {
                    padding-top: 8px;
                    display: block;
                    padding-right: 24px;
                    font-size: var(--font-size-normal);
                    font-weight: var(--font-weight-normal);
                    color: var(--font-color);
                    margin-bottom: 10px;
                }
            }
  
        }

        h2 {
            font-size: var(--font-size-title);
            font-weight: var(--font-weight-title);
        }
    }
`

export default StyledTimeline;