import React from 'react';
import {useReducer, createContext } from 'react';

let initialState = {
    difficulty:'',
    access_token: '',
    playlist_code: '4h4V4Cbn8sjznAc3uirZmK',
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "set-diff":
            return { ...state, difficulty: action.payload };
        case "set-access-token":
            return {...state, access_token: action.payload};
        case "set-playlist-code":
            return {...state, playlist_code: action.payload};
        default:
            return state;
    }
};

export const GameContext = createContext(initialState);

const GameContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

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

    return(
        <GameContext.Provider value={{
            difficulty: state.difficulty,
            access_token: state.access_token,
            playlist_code: state.playlist_code, 
            setDiff,
            setAccessToken,
            setPlaylistCode,
        }}> {children} </GameContext.Provider>
    )
};

export default GameContextProvider;