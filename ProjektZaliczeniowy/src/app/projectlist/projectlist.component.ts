import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
})
export class ProjectlistComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = { title: '', content: '' };
  editedPost: Post | null = null;
  editedPostIndex: number = -1;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  addPost(): void {
    this.postService.addPost(this.newPost);
    this.newPost = { title: '', content: '' };
    this.posts = this.postService.getPosts();
  }

  deletePost(index: number): void {
    this.postService.deletePost(index);
    this.posts = this.postService.getPosts();
  }

  enterEditMode(post: Post, index: number): void {
    this.editedPost = { ...post };
    this.editedPostIndex = index;
  }

  cancelEdit(): void {
    this.editedPost = null;
    this.editedPostIndex = -1;
  }

  updatePost(): void {
    if (this.editedPost && this.editedPostIndex !== -1) {
      this.postService.editPost(this.editedPostIndex, this.editedPost);
      this.cancelEdit();
      this.posts = this.postService.getPosts();
    }
  }
}
