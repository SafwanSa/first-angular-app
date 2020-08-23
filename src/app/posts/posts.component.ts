import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInputError } from '../bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostsService) {}

  createPost(input: HTMLInputElement) {
    let post = {
      id: this.posts.length + 1,
      title: input.value,
    };
    this.posts.splice(0, 0, post);

    this.postService.create(post).subscribe(
      () => {
        input.value = '';
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
          // this.form.setErrors(error: error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.postService.update(post).subscribe((updatedPost) => {
      console.log(updatedPost);
    });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } else {
        throw error;
      }
    });
  }

  ngOnInit() {
    this.postService.getAll().subscribe((posts) => (this.posts = posts as any));
  }
}
