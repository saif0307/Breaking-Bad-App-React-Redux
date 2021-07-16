import React, { useEffect } from "react";
import { getCharacter, getCharacters } from "../../actions";
import { connect } from "react-redux";

const CharacterDetails = (props) => {
  const { getCharacter, getCharacters, match, characters, character } = props;

  useEffect(() => {
    if(!characters) {
      getCharacters();
    }
   
  }, [getCharacters, characters]);

  useEffect(() => {
    getCharacter(match.params.id);

    return () => {
      getCharacter();
    };
  }, [characters, match.params.id, getCharacter]);

  const renderOccupations = () => {
    return character.occupation.map((e) => <li key={e}>{e}</li>);
  };
  const renderAppearance = () => {
    return character.appearance.map((e) => <li key={e}>Season: {e}</li>);
  };

  const renderCharacterDetails = () => {
    if (!character) {
      return <div className="ui massive active  loader"></div>;
    }
    return (
      <div className="ui two column divided grid">
        <div className="row">
          <div className="column">
            <img
              alt={character.name}
              className="ui righted large image"
              src={character.img}
            />
          </div>
          <div className="column">
            <h3
              style={{ marginTop: "5px", marginLeft: "5px" }}
              className="ui medium header"
            >
              {character.name}
            </h3>
            <p>Birthday: {character.birthday}</p>
            <p>Ocuppations: {renderOccupations()} </p>
            <p>Status: {character.status}</p>
            <p>NickName: {character.nickname}</p>
            <p>Appearance: {renderAppearance()}</p>
            <p>
              Portrayed: <b>{character.portrayed}</b>{" "}
            </p>
            <p>Category: {character.category}</p>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderCharacterDetails()}</div>;
};
const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    character: state.character[0],
  };
};

export default connect(mapStateToProps, { getCharacter, getCharacters })(
  CharacterDetails
);
