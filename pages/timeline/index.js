import jsdata from '../../jsdata.json';
import { StyledTimeline } from './styled';

function Timeline () {
    const playlistNames = Object.keys(jsdata.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((name) => {
                    return (
                        <section>
                            <h2>
                                {name}
                            </h2>
                            <div>
                                {jsdata.playlists[name].map((video) => {
                                    return (
                                        <a href={video.url}>
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

export default Timeline