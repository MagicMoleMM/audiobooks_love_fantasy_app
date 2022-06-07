import React, { useState } from 'react';
import ReactPlayer from "react-player";

const Player = ({ urls}) => {
    
    const [players, setPlayers] = useState(
        urls.map(url => {
            return {
                
                url,
                playing: false,

            }
        }),
    )
    

    const nextUrl = (i) => {
        if (i !== players.length - 1) {
            const newPlayers = [...players]
            newPlayers[i + 1].playing = true
            newPlayers[i].playing = false
            setPlayers(newPlayers)
        } else {
            const newPlayers = [...players]
            newPlayers[i].playing = false
            setPlayers(newPlayers)
        }   
    }
    
        return (
            <div>
              {urls.map((url, i) => (
                <div key={i} className='d-flex justify-content-between'>
                    <div>Часть {i} </div>
                    <ReactPlayer                         
                            url={url}
                            width="80%"
                            height="2vw"
                            playing={players[i].playing}
                            controls={true}
                            progressInterval={300}
                            onEnded={() => nextUrl(i)}
                            
                        />
                </div>
              ))}
            </div>
          )
}

export default Player;
