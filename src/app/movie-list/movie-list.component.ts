import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent  implements OnInit{
  movies: Movie[] = [];

  constructor(private router: Router,
              private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }


  isRecent(releaseDate: string): boolean {
    const currentYear = new Date().getFullYear();
    const movieYear = new Date(releaseDate).getFullYear();
    return (currentYear - movieYear) <= 2;
  }

  viewMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}
