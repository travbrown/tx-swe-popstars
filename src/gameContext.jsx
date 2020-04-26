import React from 'react';
const GameContext = React.createContext();

export const GameSettingsProvider = GameContext.Provider;
export const GameSettingsConsumer = GameContext.Consumer;

export default GameContext;