
import { createContext, useState } from 'react';

export const ModalContext = createContext({
    open: false,
    toggleOpen:  () => { alert('Você deve encapsular a aplicação antes de continuar!')},
    toggleClose: () => { alert('Você deve encapsular a aplicação antes de continuar!')},
    id: '',
    playlistName: null,
})

const ModalProvider = (props) => {
    const [open, setOpen] =  useState(false);
    const [id, setId] =  useState('');
    const [playlistName, setPlaylistName] =  useState(null);

    const toggleOpen = (id, name) => {
        setOpen(true);
        setId(id);
        setPlaylistName(name? name : null);
    }

    const toggleClose = () => {
        setOpen(false);
        setId('');
        setPlaylistName(null);
    }

    return (
        <ModalContext.Provider value={{open: open, toggleOpen: toggleOpen, toggleClose: toggleClose, id: id, playlistName: playlistName}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;