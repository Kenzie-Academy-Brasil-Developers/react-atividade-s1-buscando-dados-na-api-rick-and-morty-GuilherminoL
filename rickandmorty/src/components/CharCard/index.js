const CharCard = ({ character }) => {
  return (
    <>
      <p className="characterName"> Nome: {character.name} </p>
      <img alt={character.name}>{character.image}</img>
      <p>Espécie: {character.origin.name}</p>
      {character.origin.status === "Alive" ? (
        <p>Status: Vivo</p>
      ) : (
        <p>Status: Morto</p>
      )}
    </>
  );
};
export default CharCard;
