import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'  
})


export class MovieService {
  private movies: Movie[] = [
    { 
      id: 1, 
      title: 'Avengers: Endgame', 
      releaseDate: '2019-04-26', 
      genre: 'action', 
      description: 'The Avengers face their biggest challenge yet.', 
      imageUrl: 'assets/images/avengers-endgame.jpg'
    },
    { 
      id: 2,
      title: 'Inception', 
      releaseDate: '2010-07-16', 
      genre: 'sci-fi', 
      description: 'A thief who enters the dreams of others to steal secrets from their subconscious.', 
      imageUrl: 'assets/images/inception.jpg'
    },
    { 
      id: 3, 
      title: 'The Dark Knight', 
      releaseDate: '2008-07-18', 
      genre: 'action', 
      description: 'Batman faces off against the Joker, a criminal mastermind.', 
      imageUrl: 'assets/images/dark-knight.jpg'
    },
    { 
      id: 4, 
      title: 'Interstellar', 
      releaseDate: '2014-11-07', 
      genre: 'sci-fi', 
      description: 'A group of astronauts embark on a journey to save humanity.', 
      imageUrl: 'assets/images/interstellar.jpg'
    },
    { 
      id: 5, 
      title: 'The Matrix', 
      releaseDate: '1999-03-31', 
      genre: 'sci-fi', 
      description: 'A hacker learns the truth about the reality he lives in.', 
      imageUrl: 'assets/images/matrix.jpg'
    }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}