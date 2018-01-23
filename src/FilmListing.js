import React, { Component } from 'react';

class FilmListing extends Component {
  render(){
		let allFilms = this.props.films.films.map( film => {
		return(<FilmRow key={film.id} film={film} handleClick={this.props.handleClick} />);
		});
  	return(
  		 <div className="film-list">
    		<h1 className="section-title">FILMS</h1>
    		{allFilms}
  		</div>
  	);
  }
}

class FilmRow extends Component {
  render(){
  const posterUrl = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path;
    return(
    <div className="film-row" onClick={(e) => this.props.handleClick(this.props.film.id)}>
      <img src={posterUrl} alt="Poster" />

      <div className="film-summary"  >
        <h1>{this.props.film.title}</h1>
        <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        <button>Details</button>
      </div>
    </div>
    );
  }
}

export default FilmListing;
