import { useContext } from 'react';
import StyledBackground from './styled';
import { ModalContext } from '../../utils/modalProvider';

const Modal = ({ id= 'modal', children }) => {
    const modalState = useContext(ModalContext);

    const handleOutsideClick = (e) => {
        if(e.target.id === id) modalState.toggleOpen();
    };

    return (
        <StyledBackground id={id} onClick={handleOutsideClick}>
            <div> {children} </div>
        </StyledBackground>
    )
}

export default Modal;