import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';

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
    this.postService.createPost(post).subscribe((response) => {
      this.posts.splice(0, 0, post);
      input.value = '';
      console.log(response);
    });
  }

  updatePost(post) {
    this.postService.updatePosts(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.postService.deletePost(post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.postService.getPosts().subscribe((response) => {
      this.posts = response as any;
      console.log(response);
    });
  }
}
