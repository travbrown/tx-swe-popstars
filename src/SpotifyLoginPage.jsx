import React, { useState, useEffect } from 'react';
import {Howl, Howler} from 'howler';
import GameMode from './GameMode';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-js';
import Button from '@material-ui/core/Button';
import './App.css';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

    const SpotifyLoginPage = () => {
        //Lauren's 
        //const clientId = "d686743392b64810a7a8c2b5d56bf5c6";
        
        //Travis - something wrong with my client ID
        const clientId = "6ba9b22fdb4e467197055100a53c4a90";   
        const clientSecret = "6dc7ed667d824b27b65770f3c4052a0c";
        const redirectUri = "http://localhost:3000/callback/";

        const scopes = [
            "user-read-currently-playing",
            "app-remote-control",
            "streaming",
            "user-modify-playback-state",
            "playlist-modify-public",
            "ugc-image-upload",
            "user-read-playback-state",
        ];
        const spotifyApi = new SpotifyWebApi();


        // Get the hash of the url
        const hash = window.location.hash
            .substring(1)
            .split("&")
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        window.location.hash = "";

        const [isPlaying, setIsPlaying] = useState(null);
        const [songs, setSongs] = useState(null);
        const [progressMs, setProgressMs] = useState([]);
        const [token, setToken] = useState(null);
        const [item, setItem] = useState({
            album: {
                images: [{ url: "" }]
            },
            name: "",
            artists: [{ name: "" }],
            duration_ms: 0,
        });

        function getCurrentlyPlaying(token) {
            // Make a call using the token
            fetch({
                url: "https://api.spotify.com/v1/me/player",
                type: "GET",
                beforeSend: (xhr) => {
                    xhr.setRequestHeader("Authorization", "Bearer " + token);
                },
                success: (data) => {
                    setItem(data.item);
                    setIsPlaying(data.is_playing);
                    setProgressMs(data.progress_ms);
                    
                }
            });
        }

        function getSong(){
            /**
             * We are currently taking the below access token straight from the website and it is valid for only an hour
             * TODO: Implement 2nd call to spotify API for access and refresh tokens.
             */
            spotifyApi.setAccessToken("BQBz5wGulBvjMyFlHeh1YMB7n7JrH0K-4CSBQwIg-63q166zVDe1W7rEMtWwvSyAsAK54q5bjPygmBYX35aNZtTUezrVjH-b26L8qv5QFOgCPfYu4N4gWNF0mrYkgjZmF7TGNHicPYef-MNJ_yZNwG-vE5BYZCdiu5xwmNN64w4q4FuK11VewwE");
            //Couldn't get the Promise implementation to work
            //spotifyApi.setPromiseImplementation(Q);
            spotifyApi.searchTracks('God Damn Masicka')
                .then(function(data) {
                    let foundSongs = '';
                    console.log('Search by "God Damn Masicka"', data.tracks);
                    data.tracks.items.forEach((item) => {
                        foundSongs = item.preview_url;
                    });
                    setSongs(foundSongs);
                    playMusic(foundSongs);
                }, function(err) {
                    console.error(err);
                });
        }

        function playMusic(song){
            const sound = new Howl({
                src: [song],
                html5: true,
                format: ['mp3','aac'],
                autoplay: true,
                loop: true,
                volume: 0.5,
                onend: function() {
                  console.log('Finished!');
                }
              });
            sound.play();
        }

        useEffect(() => {
            // Set token
            console.log('UseEffect activated');
            let _token = hash.access_token;
            if (_token) {
                console.log('TOKEN:', typeof(_token));

                // Set token
                setToken(_token);
            }
 
        }, []);
        
        return (
            <div>
                {!token && (
                    <div>
                        
                        <Button 
                            variant="outlined" 
                            color="secondary"
                            href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                            > 
                            Login with Spotify
                        </Button>
                        <br></br>
                        <Button variant="outlined" 
                            color="secondary">
                            <Link color="secondary" to="/GuestLogin" class="active_button">Login as a Guest</Link>
                        </Button>
                    </div>
                    
                )}                

                {token && (
                    <div>
                        {/* {getAccessToken()} */}
                        Displaying Below:
                        {getSong()}
                        {/* {songs} */}
                    </div>
                )}
                     
                    
                    
            </div>
        );

    }
export default SpotifyLoginPage; 