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
  providers: [MoviesService]
})
export class AppComponent {
  constructor(private moviesService: MoviesService) {}
  movies = [];
  
  ngOnInit():void {
    this.loadMovie()
  }

  loadMovie () {
    this.moviesService.getMovies()
    .then(data => this.movies = data);
  }
}
