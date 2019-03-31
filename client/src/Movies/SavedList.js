import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active" className="saved-movie">{movie.title}</NavLink>
        ))}
        <div onClick={this.handleClick} className="home-button">Home</div>
      </div>
    );
  }
}
