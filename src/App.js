import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      film: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    console.log('reached click!');
    console.log(id);
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,images&language=en`

    fetch(url).then(response => {
    response.json().then(data => {
    console.log(data)
    this.setState({film: data})
  })
})
  }

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={TMDB} handleClick={this.handleClick}/>
          <FilmDetails film={this.state.film}/>
        </div>
      </div>
    );
  }
}

export default App;
