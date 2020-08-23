import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInputError } from './bad-input-error';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'http://localhost:1999/api/todos';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(new BadInputError(error));
        }
        return throwError(new AppError(error));
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
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      })
    );
  }
}
