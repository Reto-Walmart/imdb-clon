import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <ul>
  //       <li *ngFor="let movie of movies.results">
  //         {{movie.title}}
  //         <br>
  //         <img src="https://image.tmdb.org/t/p/w300{{movie.poster_path}}" alt="{{movie.title}}">
  //       </li>
  //     </ul>
  //   </div>
  // `,
  styleUrls: ['./app.component.css'],
  styles: [`
    .bg-img {
      background-image: url(https://image.tmdb.org/t/p/w300{{movie.poster_path}}" alt="{{movie.title}}); !important
    }
  `],
  providers: [MoviesService]
})

export class AppComponent {
  constructor(private moviesService: MoviesService) {}
  movies = [];

  loadMovie () {
    this.moviesService.getMovies()
    .then(data => this.movies = data);
  }

  ngOnInit():void {
    this.loadMovie()
  }
}
