import React from 'react';
import {useReducer, createContext } from 'react';

let initialState = {
    username1:'',
    username2:'',
    mode:'',
    score:0,
    scoreTwo: 0,
    playlist:null,
    difficulty:'',
    access_token: '',
    playlist_code: '4h4V4Cbn8sjznAc3uirZmK',
    challenge_goal:'',
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "different-game":
            return {
                ...state,
                username1:'',
                username2:'',
                playlist: null,
                mode:'',
                difficulty:'',
                playlist_code: '4h4V4Cbn8sjznAc3uirZmK',
                challenge_goal:'',
            };
        case "updateScore":
            return {...state, score: action.payload };
        case "updateScoreTwo":
            return {...state, scoreTwo: action.payload };
        case "set-diff":
            return {...state, difficulty: action.payload };
        case "set-playlist":
            return {...state, playlist: action.payload };
        case "set-username1":
            return {...state, username1: action.payload };
        case "set-username2":
            return {...state, username2: action.payload };
        case "set-mode":
            return {...state, mode: action.payload };
        case "set-challenge-goal":
            return {...state, challenge_goal: action.payload };
        case "set-access-token":
            return {...state, access_token: action.payload };
        case "set-playlist-code":
            return {...state, playlist_code: action.payload };
        default:
            return state;
    }
};

export const GameContext = createContext(initialState);

const GameContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const reset = () => {
        dispatch({
            type: "reset",
        });
    };

    const differentGame = () => {
        dispatch({
            type: "different-game",
        });
    };

    const updateScore = (score) => {
        dispatch({
            type: "updateScore",
            payload: score,
        });
    }

    const updateScoreTwo = (scoreTwo) => {
        dispatch({
            type: "updateScoreTwo",
            payload: scoreTwo,
        });
    }

    const setPlaylist = (value) => {
        dispatch({
            type: "set-playlist",
            payload: value,
        });
    };

    const setDiff = (value) => {
        dispatch({
            type: "set-diff",
            payload: value,
        });
    };

    const setAccessToken = (value) => {
        dispatch({
            type: "set-access-token",
            payload: value,
        });
    };

    const setPlaylistCode = (value) => {
        dispatch({
            type: "set-playlist-code",
            payload: value,
        });
    };

    const setMode = (value) => {
        dispatch({
            type: "set-mode",
            payload: value,
        });
    };

    const setChallengeGoal = (value) => {
        dispatch({
            type: "set-challenge-goal",
            payload: value,
        });
    };

    const setUsername1 = (value) => {
        dispatch({
            type: "set-username1",
            payload: value,
        });
    };

    const setUsername2 = (value) => {
        dispatch({
            type: "set-username2",
            payload: value,
        });
    };
    

    return(
        <GameContext.Provider value={{
            username1: state.username1,
            username2: state.username2,
            mode: state.mode,
            score: state.score,
            scoreTwo: state.scoreTwo,
            difficulty: state.difficulty,
            access_token: state.access_token,
            playlist_code: state.playlist_code,
            challenge_goal: state.challenge_goal,
            reset,
            differentGame,
            setDiff,
            updateScore,
            updateScoreTwo,
            setPlaylist,
            setAccessToken,
            setPlaylistCode,
            setChallengeGoal,
            setMode,
            setUsername1,
            setUsername2,
        }}> {children} </GameContext.Provider>
    )
};

export default GameContextProvider;