import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInputError } from './bad-input-error';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInputError(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      })
    );
  }

  updatePosts(post) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ isRead: true })
    );
  }

  deletePost(id) {
    console.log(id);
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error));
      })
    );
  }
}
