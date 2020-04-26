import React from "react";
import GameContext from './../gameContext';

const CreateGame = () => {

    let playlistOptions = [
        {playlist_name: 'Popstars1', uri_hash: '4h4V4Cbn8sjznAc3uirZmK'},
        {playlist_name: 'Popstars2', uri_hash: '2kIFfqhp98N33dhVuL7faT'},
        {playlist_name: 'Popstars3', uri_hash: '0HPFLT1oWfmkUVqQYLyzKl'},
    ];
    
    return (      
        <div className="App">
            <nav class="item">
                <h2 id="subject-no-user">Create A Challenge</h2>
            </nav>
            <header>
                <div className="centerItems">

                </div>
            </header>
        </div>
    );
  };
  export default CreateGame; 