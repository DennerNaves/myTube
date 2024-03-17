import { useContext } from 'react';
import StyledForms from './styled';
import Modal from 'modal'
import { ThemeModeContext } from '../../../utils/themeModeProvider';
import { ModalContext } from '../../../utils/modalProvider';
import CloseIcon from '@mui/icons-material/Close';

function FormsModal () {
    const themeModeContext = useContext(ThemeModeContext);
    const modalState = useContext(ModalContext);

    return (
        <Modal>
            <StyledForms themeMode={themeModeContext.themeMode}>
                <div>
                    <h2>
                        Adicionar novo video
                    </h2>
                    <div className='closeButton' onClick={() => modalState.toggleOpen()}>
                        <CloseIcon />
                    </div>
                </div>
                <div className='inputsContainer'>
                    <input placeholder='Título*' maxLength={100} minLength={5} required style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}/>
                    <input placeholder='Link do video*' maxLength={1000} minLength={5} required style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}/>
                    <input placeholder='Link da thumb*' maxLength={1000} minLength={5} required style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}/>
                </div>
                <div className='addButtonContainer'>
                    <div className='addButton'>
                        Adicionar
                    </div>
                </div>
            </StyledForms>
        </Modal>
    )
}

export default FormsModal;