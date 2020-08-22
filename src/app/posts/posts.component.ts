import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((response) => {
      this.posts = response as any;
      console.log(response);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      id: this.posts.length + 1,
      title: input.value,
    };
    this.http.post(this.url, JSON.stringify(post)).subscribe((response) => {
      this.posts.splice(0, 0, post);
      input.value = '';
      console.log(response);
    });
  }

  updatePost(post) {
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe((response) => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {}
}
