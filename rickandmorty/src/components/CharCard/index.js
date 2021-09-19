import "./style.css";
const CharCard = ({ character }) => {
  return character.status === "Alive" ? (
    <div className="aliveCharacter character">
      <p className="characterName"> Nome: {character.name} </p>
      <img alt={character.name} src={character.image} />
      <p>Origem: {character.origin.name}</p>
      {character.status === "Alive" ? (
        <p>Status: Vivo</p>
      ) : (
        <p>Status: Morto</p>
      )}
    </div>
  ) : (
    <div className="deadCharacter character">
      <p className="characterName"> Nome: {character.name} </p>
      <img alt={character.name} src={character.image} />
      <p>Origem: {character.origin.name}</p>
      {character.status === "Alive" ? (
        <p>Status: Vivo</p>
      ) : (
        <p>Status: Morto</p>
      )}
    </div>
  );
};
export default CharCard;
