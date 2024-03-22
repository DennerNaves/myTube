import { useState, useEffect, useContext } from 'react';
import StyledTimeline from './styled';
import { FaPlus } from "react-icons/fa6";
import GetData from '../../utils/services/getData';
import { ModalContext } from '../../utils/modalProvider';
import { ThemeModeContext } from '../../utils/themeModeProvider';
import { BsTrash3Fill } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

function Timeline ({searchValue}) {
    const [data, setData] = useState(null);
    const [playlistNames, setPlaylistNames] = useState(null);
    const modalState = useContext(ModalContext);
    const themeModeContext = useContext(ThemeModeContext);
    const [deleteState, setDeleteState] = useState(false);

    useEffect(() => {
        setData(GetData('@Data'));
        setPlaylistNames(Object.keys(GetData('@Data')));
    }, [])

    useEffect(() => {
        setData(GetData('@Data'));
        setPlaylistNames(Object.keys(GetData('@Data')));
    }, [modalState.id])

    if(data && playlistNames)
    return (
        <StyledTimeline themeMode={themeModeContext.themeMode}  deleteState={deleteState}>
            <div className='addPlaylist' onClick={() => modalState.toggleOpen('addPlaylist')}>
                <FaPlus />
                Playlist
            </div>

            {playlistNames.map((name) => {
                    return (
                        <section key={name}>
                            <h2>
                                {name}
                            </h2>
                            <div className='row'>
                                <div className='container'>
                                    <div className='playlist'>
                                        {data[name].filter((video) => video.title.toLowerCase().includes(searchValue.toLowerCase())).map((video) => {
                                            return (
                                                <a href={deleteState? null : video.url} key={video} target="_blank" rel="noopener noreferrer">
                                                    <div className='imageContainer'>
                                                        <img src={video.thumb}/>
                                                        {
                                                            deleteState? <CgCloseO className='deleteIcon' /> : ''
                                                        }
                                                    </div>
                                                    
                                                    <span>
                                                        {video.title}
                                                    </span>
                                                </a>
                                            )})
                                        } 
                                    </div>      
                                </div>
                                <div className='buttonsContainer'>
                                    <div className='button' onClick={() => modalState.toggleOpen('addVideo', name)}>
                                        <FaPlus />
                                    </div>
                                    <div className='button'  onClick={() => setDeleteState(!deleteState)}>
                                        {deleteState? 
                                            <IoMdClose className='iconClose' /> :
                                            <BsTrash3Fill className='iconTrash' />
                                        }
                                    </div>
                                </div>
                            </div>
                           
                        </section>
                    )
                }
            )}
        </StyledTimeline>
    )
}

export default Timeline;