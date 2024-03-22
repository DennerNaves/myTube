import { useState, useContext } from 'react';
import StyledForms from './styled';
import { ThemeModeContext } from '../../../../utils/themeModeProvider';
import { IoMdClose } from "react-icons/io";
import { ModalContext } from '../../../../utils/modalProvider';
import Modal from 'modal'
import UpdateData from '../../../../utils/services/updateData';

function AddVideo () {
    const themeModeContext = useContext(ThemeModeContext);
    const modalState = useContext(ModalContext);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleAddData = () => {
        UpdateData('@Data', {title: title, url: url, thumb: `https://img.youtube.com/vi/${url.split('/')[url.split('/').length -1]}/hqdefault.jpg`}, 'addVideo', modalState.playlistName);
        modalState.toggleClose();
    }

    return (
        <Modal>
            <StyledForms>
                <div className='containerTitle'>
                    <h2>
                        Adicionar novo video
                    </h2>
                    <div className='closeButton' onClick={() => modalState.toggleClose()}>
                        <IoMdClose style={{width: '26px', height: '26px'}} />
                    </div>
                </div>
                <div className='containerInputs'>
                    <input 
                        placeholder='Título*'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={100}
                        minLength={5}
                        required
                        style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}
                    />
                    <input
                        placeholder='Link do video*'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        maxLength={1000}
                        minLength={5}
                        required
                        style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}
                    />
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

export default AddVideo;