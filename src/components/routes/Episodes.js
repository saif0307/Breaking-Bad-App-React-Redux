import React, { useEffect } from "react";
import { getEpisodes,getEpisode,inputValue } from "../../actions";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom'
import history from "../history";

import SearchBar from "../SearchBar";

const Episodes = (props) => {
  const { getEpisodes, episodes, episode } = props;
  useEffect(() => {
    if (!episodes.length) {
      getEpisodes();
    }
  }, [getEpisodes, episodes.length]);

  history.listen(() => {
    props.inputValue('')
    props.getEpisode()
  })

  const renderEpisodes = () => {
    const reducedEpisodes = [];
    if (!episodes.length) {
      return <div className="ui massive active  loader"></div>;
    }
    if(episode[0]) {
      return (
        <div  className="  item">
        <div className="content">
          <div className="header">
         <NavLink to={`/episodes/modal/${episode[0].episode_id}`}>Epsiode: {episode[0].episode_id}</NavLink> 
          </div>
          <div className="description">
          {episode[0].title}
          </div>
        </div>
      </div>)
      
    }

    for (let i = 0; i < 10; i++) {
      reducedEpisodes.push(episodes[i]);
    }

    return reducedEpisodes.map((e) => {
      return (
      <div key={e.episode_id} className="  item">
        <div className="content">
          <div className="header">
         <NavLink to={`/episodes/modal/${e.episode_id}`}>Epsiode: {e.episode_id}</NavLink> 
          </div>
          <div className="description">
          {e.title}
          </div>
        </div>
      </div>);
    });
  };
 

  return (
    <React.Fragment>
      <SearchBar onValueChange={props.getEpisode} placeHolder="Search by title"/>
      <br/>
      <div>Total Episodes :&nbsp; {episodes.length}</div>
<div className="ui relaxed divided list">Episodes {renderEpisodes()}</div>
    </React.Fragment>
    
  );
};

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
    episode:state.episode
  };
};

export default connect(mapStateToProps, { getEpisodes,getEpisode,inputValue })(Episodes);
