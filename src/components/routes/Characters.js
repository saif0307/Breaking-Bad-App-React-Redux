import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, getCharacter } from "../../actions";

import history from "../history";
import SearchBar from "../SearchBar";

const Characters = (props) => {
  const { getCharacters, characters, character } = props;

  useEffect(() => {
    if (!characters.length) {
      getCharacters();
    }
  }, [getCharacters, characters.length]);

  history.listen(() => {
    props.getCharacter()
  })

  const onImageClick = (id) => {
    history.push(`/characterdetails/${id}`)
  }

  const renderCharacters = () => {
    const reducedCharacters = [];
    if (!characters.length) {
      return <div className="ui massive active  loader"></div>
    }
    if (character[0]) {
      const item = character[0];
      return (
        <div onClick={() => onImageClick(item.char_id)} className="card">
          <img className="ui fluid rounded image" alt={item.portrayed} src={item.img} />
          <div className="extra">
            <div className="ui  sub header">{item.name}</div>
            Nickname: {item.nickname}
          </div>
        </div>
      );
    }

    for (let i = 0; i < 12; i++) {
      reducedCharacters.push(characters[i]);
    }
    return reducedCharacters.map((item) => {
      return (
        <div key={item.char_id} onClick={() => onImageClick(item.char_id)} className="card">
          <img className="ui fluid rounded image" alt={item.portrayed} src={item.img} />
          <div className="extra">
            <div className="ui  sub header">{item.name}</div>
            Nickname: {item.nickname}
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <SearchBar
        onValueChange={props.getCharacter}
        placeHolder="Search Characters"
      />
      <br />
      <div>Total Characters: &nbsp;<b>{characters.length}</b></div>
      <br/>
      <div className="ui link three cards ">{renderCharacters()}</div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    character: state.character,
  };
};

export default connect(mapStateToProps, { getCharacters, getCharacter })(
  Characters
);
