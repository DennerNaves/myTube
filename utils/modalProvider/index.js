
import { createContext, useState } from 'react';

export const ModalContext = createContext({
    open: false,
    toggleOpen:  () => { alert('Você deve encapsular a aplicação antes de continuar!')}
})

const ModalProvider = (props) => {
    const [open, setOpen] =  useState(false)

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <ModalContext.Provider value={{open: open, toggleOpen: toggleOpen}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;