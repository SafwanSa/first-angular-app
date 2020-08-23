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
    this.postService.createPost(post).subscribe(
      (response) => {
        this.posts.splice(0, 0, post);
        input.value = '';
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          // this.form.setErrors(error: error.originalError);
        } else {
          alert('Unexpected error occured. ');
        }
        console.log(error);
      }
    );
  }

  updatePost(post) {
    this.postService.updatePosts(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('Unexpected error occured. ');
      }
    );
  }

  deletePost(post) {
    this.postService.deletePost(post.id).subscribe(
      (response) => {
        if (Object.keys(response).length !== 0) {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          alert('Uncexpected error occured. ');
        }
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response as any;
        // console.log(response);
      },
      (error) => {
        alert('Uncexpected error occured. ');
        console.log(error);
      }
    );
  }
}
