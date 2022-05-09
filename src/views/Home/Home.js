import { useEffect, useState } from 'react';
import { useCharacters } from '../../context/CharacterContext';
import { fetchCharacters } from '../../utils/characters';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { setCharacters, characters } = useCharacters();
  useEffect(() => {
    fetchCharacters()
      .then(({ results }) => setCharacters(results))
      .then(() => setLoading(false));
  });
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        characters.map((char) => <div key={char.id}>{char.name}</div>)
      )}
    </div>
  );
}
