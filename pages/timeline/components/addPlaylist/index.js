import { useState, useContext } from 'react';
import StyledForms from './styled';
import { ThemeModeContext } from '../../../../utils/themeModeProvider';
import { IoMdClose } from "react-icons/io";
import { ModalContext } from '../../../../utils/modalProvider';
import Modal from 'modal'
import UpdateData from '../../../../utils/services/updateData';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './formSchema';

function AddPlaylist () {
    const themeModeContext = useContext(ThemeModeContext);
    const modalState = useContext(ModalContext);
    const [name, setName] = useState('');

    const handleAddData = () => {
        //UpdateData('@Data', name, 'addPlaylist');
        //modalState.toggleClose();
    }

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
            mode: 'all',
            reValidateMode: 'onChange', 
            resolver: zodResolver(formSchema) 
        });

    return (
        <Modal>
            <StyledForms onSubmit={handleSubmit(handleAddData)}>
                <div className='containerTitle'>
                    <h2>
                        Adicionar nova playlist
                    </h2>
                    <div className='closeButton' onClick={() => modalState.toggleClose()}>
                        <IoMdClose style={{width: '26px', height: '26px'}} />
                    </div>
                </div>
                <div className='containerForms'>
                    <div className='containerInput'>
                        <label> 
                            <span className='label'>Nome da playlist</span>
                            <input
                                {...register('playlistName')}
                                placeholder='Nome da playlist *'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}
                            />
                        </label>
                        <span className='errorMessage'>{errors.playlistName?.message}</span>
                    </div>
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