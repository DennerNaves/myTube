import { useState, useContext } from 'react';
import StyledForms from './styled';
import { ThemeModeContext } from '../../../../utils/themeModeProvider';
import { IoMdClose } from "react-icons/io";
import { ModalContext } from '../../../../utils/modalProvider';
import Modal from 'modal'
import UpdateData from '../../../../utils/services/updateData';

function AddPlaylist () {
    const themeModeContext = useContext(ThemeModeContext);
    const modalState = useContext(ModalContext);
    const [name, setName] = useState('');

    const handleAddData = () => {
        UpdateData('@Data', name, 'addPlaylist');
        modalState.toggleClose();
    }

    return (
        <Modal>
            <StyledForms>
                <div className='containerTitle'>
                    <h2>
                        Adicionar nova playlist
                    </h2>
                    <div className='closeButton' onClick={() => modalState.toggleClose()}>
                        <IoMdClose style={{width: '26px', height: '26px'}} />
                    </div>
                </div>
                <div className='containerInput'>
                    <input 
                        placeholder='Nome da playlist*'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                        minLength={5}
                        required
                        style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}/>
                </div>
                <div className='addButtonContainer'>
                    <div className='addButton' onClick={handleAddData}>
                        Adicionar
                    </div>
                </div>
            </StyledForms>
        </Modal>

    )
}

export default AddPlaylist;