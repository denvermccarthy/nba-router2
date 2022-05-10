import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCharacters } from '../../context/CharacterContext';
import { fetchCharacter } from '../../utils/characters';

export default function CharacterDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { characters } = useCharacters();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchedCharacter = await fetchCharacter(id);
      setCharacter(fetchedCharacter);
      setLoading(false);
    };
    const char = characters.find((char) => char.id === Number(id));
    char ? setCharacter(char) : fetchData();
    setLoading(false);
  }, [id]);
  return loading ? (
    <div>loading ...</div>
  ) : (
    <div>
      <button onClick={() => history.goBack()}>{'<<<'}</button>
      {character.name}{' '}
      <img src={character.image} alt={`image of ${character.name}`} />
    </div>
  );
}
