import { useState, useEffect, useContext } from 'react';
import StyledTimeline from './styled';
import AddIcon from '@mui/icons-material/Add';
import GetData from '../../utils/services/getData';
import { ModalContext } from '../../utils/modalProvider';

function Timeline ({searchValue}) {
    const [data, setData] = useState(null);
    const [playlistNames, setPlaylistNames] = useState(null);
    const modalState = useContext(ModalContext);

    useEffect(() => {
        setData(GetData('@Data'));
        setPlaylistNames(Object.keys(GetData('@Data')));
    }, [])

    if(data && playlistNames)
    return (
        <StyledTimeline>
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
                                                <a href={video.url} key={video} target="_blank" rel="noopener noreferrer">
                                                    <img src={video.thumb}/>
                                                    <span>
                                                        {video.title}
                                                    </span>
                                                </a>
                                            )})
                                        } 
                                    </div>      
                                </div>
                                <div className='addButton' onClick={() => modalState.toggleOpen()}>
                                    <AddIcon />
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