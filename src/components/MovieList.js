import React from 'react';

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent;

	return (
		<>
			{props.movies.map((movie) => (
				<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavoritesClick(movie)}
						className='overlay'
					>
						<FavoriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;