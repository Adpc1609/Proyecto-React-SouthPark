import React, { Component } from 'react';

import './App.css';

class southPark extends React.Component {
  render() {
    return (
      <figure className="media-left">
      <img className="media-object" width="64px" src={`http://taller-angular.carlosazaustre.es/asset/${this.props.picture}`} />
      </figure>

    );
  }
}

export default southPark;
