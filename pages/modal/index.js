import { useContext } from 'react';
import StyledBackground from './styled';
import { ModalContext } from '../../utils/modalProvider';

const Modal = ({ id= 'modal', children }) => {
    const modalState = useContext(ModalContext);

    const handleOutsideClick = (e) => {
        if(e.target.id === id) modalState.toggleClose();
    };

    return (
        <StyledBackground id={id} onClick={handleOutsideClick}>
            <div className='backgroundContainer'>
                {children}
            </div>
        </StyledBackground>
    )
}

export default Modal;