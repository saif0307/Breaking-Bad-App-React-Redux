import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getDeaths } from "../../actions";

const Deaths = (props) => {
  const { getDeaths, death } = props;
  useEffect(() => {
      if(!death) {
        getDeaths();
      }
    
  });
  const renderDeath = () => {
      if(!death) {
          return <div className="ui massive active  loader"></div>;
      }
    return (
      <React.Fragment>
        <div className="row">
          <div className="column">
            <img src={death.img} alt={death.death} className="ui righted medium image"/>
          </div>
        
        <div className="column">
          <h3
            style={{ marginTop: "5px", marginLeft: "5px" }}
            className="ui medium header"
          >
            {death.death}
          </h3>
          <p>NickName: {death.nickname}</p>
          <p>Death cause: {death.cause}</p>
          <p>Responsible: {death.responsible}</p>
          <p>Last Words: {death.last_words}</p>
          <p>Season: {death.season}</p>
          <p>Episode: {death.episode}</p>
          <div>Occupation: {death.occupation.map((el) => <p key={el}>{el}</p> )}</div>
          <br/>
          <br/>
          <br/>
          <button onClick={getDeaths} className="fluid ui negative button">
        Get a random death
      </button>
        </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <br/>
      <div className="ui two column divided grid">
      {renderDeath()}
      </div>
      
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    death: state.death[0],
  };
};

export default connect(mapStateToProps, { getDeaths })(Deaths);
