import React from "react";
import {connect} from 'react-redux'
import {inputValue } from "../actions";

const SearchBar = (props) => {
    const { value, inputValue} = props
    const onValueChange = (e) => {
        inputValue(e.target.value);
        props.onValueChange(e.target.value)
    }

  return (
    <div className="ui category center aligned search">
      <div className="ui icon input">
        <input value={value} onChange={onValueChange} className="prompt" type="text" placeholder={props.placeHolder} />
        <i className="search icon" />
      </div>
      <div className="results"></div>
    </div>
  );
};

const mapStateToProps =(state) => {
    return {
        value: state.searchValue

    }
}

export default connect(mapStateToProps, {inputValue})(SearchBar)
