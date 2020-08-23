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
    this.postService.create(post).subscribe(
      (newPost) => {
        this.posts.splice(0, 0, post);
        input.value = '';
        console.log(newPost);
      },
      (error: AppError) => {
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
    this.postService.delete(post.id).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      }
    );
  }

  ngOnInit() {
    this.postService.getAll().subscribe((posts) => (this.posts = posts as any));
  }
}
