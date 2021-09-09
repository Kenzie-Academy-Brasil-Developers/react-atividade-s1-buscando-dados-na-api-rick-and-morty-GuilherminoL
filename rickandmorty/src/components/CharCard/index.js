const CharCard = ({ character }) => {
  return (
    <>
      <p className="characterName"> Nome: {character.name} </p>
      <img alt={character.name} src={character.image} />
      <p>Espécie: {character.origin.name}</p>
      {character.status === "Alive" ? (
        <p>Status: Vivo</p>
      ) : (
        <p>Status: Morto</p>
      )}
    </>
  );
};
export default CharCard;
