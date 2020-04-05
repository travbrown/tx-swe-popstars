import React, { useState, useEffect } from 'react';
import './App.css';
import {
    Link,
} from "react-router-dom";
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

    const SpotifyLoginPage = () => {
        const clientId = "d686743392b64810a7a8c2b5d56bf5c6";
        const redirectUri = "http://localhost:3000/callback/";
        const scopes = [
            "user-read-currently-playing",
            "user-read-playback-state",
        ];
        // Get the hash of the url
        const hash1 = window.location.hash
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

        const [isPlaying, setIsPlaying] = useState([]);
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
                    this.setState({
                        item: data.item,
                        is_playing: data.is_playing,
                        progress_ms: data.progress_ms,
                    });
                }
            });
        }

        useEffect(() => {
            // Set token
            let _token = hash1.access_token;
            if (_token) {
                // Set token
                setToken({
                    token: _token
                });
            }
        });
        return (
            <div>
                <button>
                    <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`} class="active_button">Login with Spotify</a>
                </button>
                <br></br>
                <button>
                    <Link to="/GuestLogin" class="active_button">Login as a Guest</Link>
                </button>
            </div>
        );

    }
export default SpotifyLoginPage; 