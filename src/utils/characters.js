export const fetchCharacters = async (search) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character${search}`);
  const data = await res.json();
  return data;
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
};
