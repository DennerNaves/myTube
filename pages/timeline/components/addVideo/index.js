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

function AddVideo () {
    const themeModeContext = useContext(ThemeModeContext);
    const modalState = useContext(ModalContext);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
            mode: 'all',
            reValidateMode: 'onChange', 
            resolver: zodResolver(formSchema) 
        });

    const handleAddData = () => {
        UpdateData('@Data', {title: title, url: url, thumb: `https://img.youtube.com/vi/${url.split('/')[url.split('/').length -1]}/hqdefault.jpg`}, 'addVideo', modalState.playlistName);
        modalState.toggleClose();
    }

    console.log(errors)
    return (
        <Modal>
            <StyledForms onSubmit={handleSubmit(handleAddData)}>
                <div className='containerTitle'>
                    <h2>
                        Adicionar novo video
                    </h2>
                    <div className='closeButton' onClick={() => modalState.toggleClose()}>
                        <IoMdClose style={{width: '26px', height: '26px'}} />
                    </div>
                </div>
                <div className='containerForms'>
                    <div className='containerInput'>
                        <label> 
                            <span className='label'>Título</span>
                            <input
                                {...register('title')}
                                placeholder='Título *'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}
                            />
                        </label>
                         <span className='errorMessage'>{errors.title?.message}</span>
                    </div>
                    <div className='containerInput'>
                        <label> 
                            <span className='label'>Link do video</span>
                            <input
                                {...register('link')}
                                placeholder='Link do video *'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                style={themeModeContext.themeMode == 'light'? {border: '1px solid #e5e5e5'} : {border: '1px solid #383838'}}
                            />
                        </label>
                        <span className='errorMessage'>{errors.link?.message}</span>
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

export default AddVideo;