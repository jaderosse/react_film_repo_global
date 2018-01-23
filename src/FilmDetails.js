import React, { Component } from 'react';

class FilmDetails extends Component {
	render(){
		console.log(this.props.film.title);
		const backdropUrl = `https://image.tmdb.org/t/p/w1280/${this.props.film.backdrop_path}`
		const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
		return(
			<div className="film-details">
    			<h1 className="section-title">DETAILS</h1>
    			<img src={backdropUrl} />
    			<img src={posterUrl} />
  			</div>
  	);
	}
}

export default FilmDetails;