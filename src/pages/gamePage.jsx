import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import SpotifyWebApi from "spotify-web-api-js";
import "./gamePage.css";
import asap_ferg from "../photos/ASAP_Ferg.png";
import asap_rocky from "../photos/ASAP_Rocky.png";
import cardi_b from "../photos/cardi_b.png";
import drake from "../photos/drake.png";
import lil_wayne from "../photos/lil_wayne.png";
import tupac from "../photos/tupac.png";
import kanye_west from "../photos/kanye_west.png";
import jcole from "../photos/jcole.png";
import nicki_minaj from "../photos/nicki_minaj.png";
import beyonce from "../photos/Beyonce.png";

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
  
const GamePage = () => {
	const spotifyApi = new SpotifyWebApi();

	const [playlist, setPlaylist] = useState(null);
	const [artists, setArtists] = useState(null);
	const [track, setTrack] = useState(null);

	const [requestNextSong, setRequestNextSong] = useState(false);
	const [songIndex, setSongIndex] = useState(0);
	const [artistIndex, setArtistIndex] = useState(0);

	const [soundHowl, setSoundHowl] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [score, setScore] = useState(0);


	const Bubble = ({ number, hasArtist, image, name }) => {
    
		const [clicked, setClicked] = useState(false);
		
		const checkAnswer = () => {
			setClicked(true);
			if (name === artists[artistIndex]) {
				setScore(score + 5);
				nextSong();
			}
    	};
  
    return (
        <div class={`bubble x${number}`}  
        style={{ display: clicked ? "none" : "flex" }}
        onClick={checkAnswer} >
          <img
            style={{
              display: hasArtist ? "inline-block" : "none",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%"
            }}
            alt= "bubble pic"
            src={image}
          />
        </div>
      );
	};

    const nextSong = () => {
		soundHowl.stop();
		setArtistIndex(artistIndex+1);
		playMusic();
	}
 
	const makeSpotifyCall = async (token) => {
		await getPlaylist(token);
	};

	useEffect(() => {
		let token = localStorage.getItem('access_token');
		makeSpotifyCall(token);
	}, []);

	const getPlaylist = async access_token => {
    spotifyApi.setAccessToken(access_token);
    let foundSongs = [];
	let artist = [];
	let playlist = await spotifyApi.getPlaylistTracks("4h4V4Cbn8sjznAc3uirZmK");
    playlist.items.forEach(item => {
        if (item.track.preview_url !== null && foundSongs.length < 10) {
            artist.push(item.track.artists[0].name);
            foundSongs.push(item.track.preview_url);
        }
    });
    setTrack(foundSongs[songIndex]);
    setArtists(artist);
    setPlaylist(foundSongs);
    document.getElementById("autoPlay").click();
};

	useEffect(() => {
		if (soundHowl) {
			soundHowl.play();
		}
	}, [soundHowl]);
	
	const playMusic = () => {
		setSoundHowl(
				new Howl({
				src: [track],
				html5: true,
				format: ["mp3", "aac"],
				autoplay: false,
				loop: false,
				volume: 0.5,
				onload: function() {
					console.log("LOADED!!");
					setTrack(playlist[songIndex+1]);
					setSongIndex(songIndex+1);
				},
				onend: () => { 
					console.log('Finished');
					setRequestNextSong(true); 
					
				},
			})
		);
	};

	if (requestNextSong) {
		setArtistIndex(artistIndex + 1);
		setRequestNextSong(false);
		playMusic();
	}

  return (
    <div className="App">
		<button
			id="autoPlay"
			style={{ display: "none" }}
			onClick={playMusic}> 
			can you see me? 
		</button>
		<div class="item">Username</div>
		<div class="item">SCORE: {score}</div>
		
		<div id="background-wrap">
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
		<button className = "quit_button" onClick={() => setShowModal(true)}> QUIT </button>
		<div
			className={showModal ? "modal show" : "modal"}
			onClick={() => setShowModal(false)}
		>
			<div id="modalContainer" >
				<h1>Are you sure you want to quit?</h1>
				<a class='quit' href='/gameMode'> QUIT </a>
				<a class='cancel' href= '#'> CANCEL </a>
			</div>
		</div>
    </div>
  );
};

export default GamePage;