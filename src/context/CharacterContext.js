import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ prev: null, next: null });
  const urlParams = (url) => {
    const formatUrl = new URL(url);
    return formatUrl.search;
  };
  return (
    <CharacterContext.Provider
      value={{ characters, setCharacters, info, setInfo, urlParams }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacters = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacters must be used in a CharacterProvider');
  }
  return context;
};

export { useCharacters, CharacterProvider };
