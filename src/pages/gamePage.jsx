import React, { useState, useEffect, useReducer } from 'react';
import { Howl } from 'howler';
import SpotifyWebApi from 'spotify-web-api-js';
import './gamePage.css';
import asap_ferg from '../photos/ASAP_Ferg.png';
import asap_rocky from '../photos/ASAP_Rocky.png';
import cardi_b from '../photos/cardi_b.png';
import drake from '../photos/drake.png';
import lil_wayne from '../photos/lil_wayne.png';
import tupac from '../photos/tupac.png';
import kanye_west from '../photos/kanye_west.png';
import jcole from '../photos/jcole.png';
import nicki_minaj from '../photos/nicki_minaj.png';
import beyonce from '../photos/Beyonce.png';

let artistsFaces = [
    { name: 'A$AP Ferg', image: asap_ferg },
    { name: 'A$AP Rocky', image: asap_rocky },
    { name: 'Cardi B', image: cardi_b },
    { name: 'Drake', image: drake },
    { name: 'Lil Wayne', image: lil_wayne },
    { name: '2Pac', image: tupac },
    { name: 'Kanye West', image: kanye_west },
    { name: 'J. Cole', image: jcole },
    { name: 'Nicki Minaj', image: nicki_minaj },
    { name: 'Beyoncé', image: beyonce },
];

const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        //let num = trackIndex + 1;
        //console.log(Date.now());
        console.log('10');
        return {
            trackIndex: state.trackIndex + 1
        };
      default:
        return state;
    }
  };

const GamePage = () => {
    const spotifyApi = new SpotifyWebApi();
    const [playlist, setPlaylist] = useState(null);
    const [track, setTrack] = useState(null);
    //const [trackIndex, setTrackIndex] = useState(0);
    const [soundHowl, setSoundHowl] = useState(null);
    const [artists, setArtists] = useState([]);

    

    const handleIncrease = () => {
        dispatch({ 
            type: 'INCREMENT',
            trackIndex: state.trackIndex,
           });
    };
  
    let initialState = { trackIndex : 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const Bubble = ({ number, hasArtist, image, name }) => {
        return (
            <div class={`bubble x${number}`} onClick={() => bubbleCheck(name)}>
                <img
                    style={{
                        display: hasArtist ? 'inline-block' : 'none',
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }}
                    alt='bubble pic'
                    src={image}
                />
            </div>
        );
    };

    const makeSpotifyCall = async (token) => {
        await getPlaylist(token);
    };

    useEffect(() => {
        let token = localStorage.getItem('access_token');
        makeSpotifyCall(token);
        console.log('3');
    }, []);

    /**
     * if you click a bubble,
     * it checks if the artist in the bubble is the artist of the song playing
     *  if yes:
     *      - artistFound()
     *        - pop bubble, 
     *        - stop current song, 
     *        - increment index
     *          start over with new song
     *              set new track & play
     */
    const bubbleCheck = (name) => {
        if(name === artists[state.trackIndex]){
            artistsFound();
        }
    }

    const artistsFound = () => {
        //TODO: POP THE BUBBLE
        soundHowl.stop();
        console.log('9');
        handleIncrease();
        console.log('track index has now become:', state.trackIndex);
        playMusic();
    }

    const getPlaylist = async (access_token) => {
        spotifyApi.setAccessToken(access_token);
        //Couldn't get the Promise implementation to work
        //spotifyApi.setPromiseImplementation(Q);
        console.log('1');
        await spotifyApi
            .getPlaylistTracks('4h4V4Cbn8sjznAc3uirZmK')
            .then(
                function (data) {
                    let foundSongs = [];
                    let artist = [];
                    //console.log('My Rap Playlist', data.items);
                    data.items.forEach((item) => {
                        if (
                            item.track.preview_url !== null &&
                            foundSongs.length < 10
                        ) {
                            artist.push(item.track.artists[0].name);
                            foundSongs.push(item.track.preview_url);
                        }
                    });
                    //setTrack(foundSongs[state.trackIndex]);
                    
                    setArtists(artist);
                    setPlaylist(foundSongs);
                },
                function (err) {
                    console.error(err);
                }
            )
            .catch((e) => console.log(e));
        console.log('2');
        document.getElementById('autoPlay').click();
    };

    useEffect(() => {
        if (soundHowl) soundHowl.play();
    }, [soundHowl]);

    const playMusic = () => {
        
        if(state.trackIndex === 10){
            return
        }
        console.log('curr index:',state.trackIndex);
        console.log('artist:' ,artists)
        setTrack(playlist[state.trackIndex]);
        console.log('new track:',track);
        setSoundHowl(
            new Howl({
                src: [track],
                html5: true,
                format: ['mp3', 'aac'],
                autoplay: false,
                loop: false,
                volume: 0.5,
                onload: function () {
                    console.log('LOADED!!');
                    //setSongLoadState(true);
                },
                onend: function () {
                    console.log('Finished!');
                },
            })
        );
    };

    return (
        <div className='App'>
            <button
                id='autoPlay'
                style={{ display: 'none' }}
                // onClick={() => console.log('1')}
                onClick={playMusic}
            >
                can you see me?
            </button>
            <div class='item'>Username</div>
            <div class='item'>score: {state.trackIndex}</div>
            <div id='background-wrap'>
                {artistsFaces.map((item, idx) => (
                    <>
                        <Bubble
                            key={idx}
                            image={item.image}
                            hasArtist
                            number={idx}
                            name={item.name}
                        />
                    </>
                ))}
            </div>
            <a class='quit_button' href='#quit_button'>
                {' '}
                QUIT
            </a>
            <div id='quit_button' class='overlay'>
                <div class='popup'>
                    <h2> Are you sure you want to quit? </h2>
                    <a class='quit' href='/gameMode'>
                        {' '}
                        QUIT{' '}
                    </a>
                    <a class='cancel' href='#'>
                        {' '}
                        CANCEL{' '}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
