import React, { useState, useEffect, useRef, useContext } from "react";
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

    let playlistOptions = [
        {playlist_name: 'Popstars1', uri_hash: '4h4V4Cbn8sjznAc3uirZmK'},
        {playlist_name: 'Popstars2', uri_hash: '2kIFfqhp98N33dhVuL7faT'},
        {playlist_name: 'Popstars3', uri_hash: '0HPFLT1oWfmkUVqQYLyzKl'},
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
                        <Card.Footer>  <Link to="/playlistGame" class ="card_button"> Friday Hits </Link> </Card.Footer>
                        </center>
                    </Card>

                    <Card>
                    <Card.Img variant="top" src= {album_two} />
                    <center> 
                    <Card.Footer>  <Link to="/playlistGame" class ="card_button">TechX Jam </Link> </Card.Footer>
                        </center>
                    </Card>
                    
                    <Card>
                    <Card.Img variant="top" src= {album_three} />
                    <center> 
                        <Card.Footer>  <Link to="/playlistGame" class ="card_button"> happy songs </Link> </Card.Footer>
                    </center>
                    </Card>
                    </CardDeck>
                </header>
            </div>
        </div>
    );
  };

  export default ChoosePlaylist;