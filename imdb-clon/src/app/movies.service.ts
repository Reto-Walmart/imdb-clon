import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie } from './movie';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class MoviesService {
    private moviesUrl = 'https://api.themoviedb.org/4/list/1?page=2&api_key=0b7dcdf0c52cc01218cab1dec23274f4'
    
    constructor(private http: Http) {}

    getMovies():Promise <Movie[]>{
       return this.http.get(this.moviesUrl)
       .toPromise()
       .then(response => response.json())
       .catch(this.handleError);
    }

    private handleError(error: any): Promise <any>{
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    }
}