//this page provides three playlists for the user to choose from

import React, { useContext } from "react";
import {GameContext} from './../gameContext';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import album_one from "../photos/album_one.png";
import album_two from "../photos/album_two.png";
import album_three from "../photos/album_three.png";

const ChoosePlaylist = () => {
    const {setPlaylistCode} = useContext(GameContext);

    const setPlaylist = (index) => {
        setPlaylistCode(playlistOptions[index].uri_hash);
    };

    let playlistOptions = [  //the three playlists that are provided
        {playlist_name: 'Friday Hits', uri_hash: '4h4V4Cbn8sjznAc3uirZmK'},
        {playlist_name: 'TechX Jam', uri_hash: '2kIFfqhp98N33dhVuL7faT'},
        {playlist_name: 'Throwback', uri_hash: '0HPFLT1oWfmkUVqQYLyzKl'},
    ]; 

    return (      
        <div className="App">
            <nav class="item">
                <h2 id="subject-challenge"> Create A Challenge</h2>
            </nav>
            <div className="centerItems">
                <header className ="App-header">
                    <h2 id="subject_text"> Choose a playlist</h2> 
                    <CardDeck>
                    <Card>
                    <Card.Img variant="top" src= {album_one} />
                        <center> 
                        <Card.Footer>  
                            <Link to="/countdown" onClick={()=>setPlaylist(0)} class ="card_button">{playlistOptions[0].playlist_name}</Link> 
                        </Card.Footer>
                        </center>
                    </Card>

                    <Card>
                    <Card.Img variant="top" src= {album_two} />
                    <center> 
                        <Card.Footer>  
                            <Link to="/countdown" onClick={()=>setPlaylist(1)} class ="card_button">{playlistOptions[1].playlist_name}</Link> 
                        </Card.Footer>
                    </center>
                    </Card>
                    
                    <Card>
                    <Card.Img variant="top" src= {album_three} />
                    <center> 
                        <Card.Footer>  
                            <Link to="/countdown" onClick={()=>setPlaylist(2)} class ="card_button">{playlistOptions[2].playlist_name}</Link> 
                        </Card.Footer>
                    </center>
                    </Card>
                    </CardDeck>
                </header>
            </div>
        </div>
    );
  };

  export default ChoosePlaylist;