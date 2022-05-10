import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCharacters } from '../../context/CharacterContext';
import { fetchCharacters } from '../../utils/characters';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const {
    setCharacters,
    characters,
    info: { prev, next },
    setInfo,
    urlParams,
  } = useCharacters();

  useEffect(() => {
    const fetchData = async () => {
      const { info, results } = await fetchCharacters(search);
      setInfo(info);
      setCharacters(results);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {prev && <Link to={`/home${urlParams(prev)}`}>{'<..prev'}</Link>}
          {next && <Link to={`/home${urlParams(next)}`}>{'..next>'}</Link>}
          {characters.map((char) => (
            <Link key={char.id} to={`/home/${char.id}`}>
              {' '}
              <div>{char.name}</div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
