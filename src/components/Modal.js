import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import { connect } from "react-redux";

import {getEpisodes} from '../actions'
import history from './history'

const Modal = (props) => {
  const {getEpisodes, episodes} = props

  const modalOut = () => {
    history.push('/episodes')
  }
  const renderEpisode = () => {
    if(!episodes.length)
    {
      return <div className="ui massive active  loader"></div>;
    }
     const episode = episodes.find((item) => item.episode_id === parseInt(props.match.params.id) )
     
     return(
       <div style={{marginTop: '8px', marginBottom: '8px',textAlign:'center'}}>
         <h3>{episode.title}</h3>
        <div> Airdate: {episode.air_date}</div>
         <br/>
         <div>Episode no. {episode.episode}</div>
         <br/>
         <div>Season: {episode.season}</div>
         <br/>
         <div>Characters: {episode.characters.map((name) => <div key={name}>{name}</div>)}</div>
       </div>
     )
  }
  useEffect(() => {
    if(!episodes.length) {
      getEpisodes()
    }
  }, [episodes.length, getEpisodes])
    
  return ReactDOM.createPortal(
        
    <div onClick={modalOut} className="ui dimmer modals visible active">
    <div style={{border: '1px solid green'}} onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
    {renderEpisode()}
    <div className="actions">
    <div onClick={modalOut} className="ui negative button"> Close</div>
    </div>
    </div>
  </div>,
  document.getElementById('modal')
    )
  
  
};

const mapStateToProps = (state) => {
return {
  episodes: state.episodes
}
}

export default connect(mapStateToProps, {getEpisodes})(Modal)
