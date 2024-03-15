import jsdata from '../../jsdata.json';
import StyledTimeline from './styled';

function Timeline ({searchValue}) {
    const playlistNames = Object.keys(jsdata.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((name) => {
                    return (
                        <section key={name}>
                            <h2>
                                {name}
                            </h2>
                            <div>
                                {jsdata.playlists[name].filter((video) => video.title.toLowerCase().includes(searchValue.toLowerCase())).map((video) => {
                                    return (
                                        <a href={video.url} key={video}>
                                            <img src={video.thumb}/>
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )})
                                }       
                            </div>
                        </section>
                    )
                }
            )}
        </StyledTimeline>
    )
}

export default Timeline;