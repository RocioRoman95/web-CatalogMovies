import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({ 
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  movies: Movie[] = [];
  /*movies: Movie = { 
    id: 0, 
    title: '', 
    releaseDate: '', 
    genre: '', 
    description: '' };
*/
  constructor(private route: ActivatedRoute,
              private movieService: MovieService,) { }


  ngOnInit(): void {

    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(movieId);
  }
}

