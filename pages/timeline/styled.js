import styled from 'styled-components';

const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px 60px;
    height: 1000px;

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

    .addPlaylist {
        width: 100px;
        height: 34px;
        margin-top: 30px;
        justify-content: center;
        align-items: center;
        padding: 7px 15px;
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-title);
        background-color: ${({theme}) => theme.buttonBackground};
        color: ${({theme}) => theme.buttonText};
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        &:hover,
        &:focus {
            background-color: ${({theme}) => theme.buttonBackgroundHover};
            color: ${({theme}) => theme.buttonTextHover};
        }
    }

    section {
        width: 100%;
        padding: 0;
        margin-top: 40px;

        .playlist {
            width: min-content;
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(200px, 1fr);

            a {
                pointer-events: ${(props) =>  props.deleteState? 'none' : 'auto'};
                scroll-snap-align: start;

                span {
                    padding-top: 8px;
                    display: block;
                    padding-right: 24px;
                    font-size: var(--font-size-normal);
                    font-weight: var(--font-weight-normal);
                    margin-bottom: 10px;
                    color: ${({theme}) => theme.textColorBase};
                }
            }
  
        }

        h2 {
            font-size: var(--font-size-title);
            font-weight: var(--font-weight-title);
        }

        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            max-width: calc(100vw - 17%);
            width: min-content;
        }

        .container {
            display: flex;
            border: 1px solid black;
            height: 240px;
            align-items: center;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid ${({theme}) => theme.borderBase};
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            
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
            
        }

        .buttonsContainer {
            margin-left: 40px;
            border: 1px solid ${({theme}) => theme.borderBase};
            cursor: pointer;
            background-color: ${({theme}) => theme.backgroundBase};
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({theme}) => theme.textColorBase};
            border-radius: 8px;
            width: 32px;
            flex-direction: column;
            gap: 32px;
        }

        .button {
            background-color: ${({theme}) => theme.buttonBackground};
            color: ${({theme}) => theme.buttonText};
            border-radius: 4px;
            width: 22px;
            height: 22px;
            align-items: center;
            justify-content: center;
            display: flex;
            &:hover,
            &:focus {
                background-color: ${({theme}) => theme.buttonBackgroundHover};
                color: ${({theme}) => theme.buttonTextHover};
            }
        }

        .iconTrash {
            width: 12px;
            height: 12px;
        }

        .iconClose {
            width: 16px;
            height: 16px;
        }

        .imageContainer {
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .deleteIcon {
            width: 62px;
            height: 62px;
            color: ${({theme}) => theme.backgrondLevel1};
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            pointer-events: ${(props) =>  props.deleteState? 'auto' : 'none'};
            color: ${({theme}) => theme.buttonText};

            cursor: pointer;
            &:hover,
            &:focus {
                color: ${({theme}) => theme.buttonTextHover};
            }
        }
    }
`

export default StyledTimeline;