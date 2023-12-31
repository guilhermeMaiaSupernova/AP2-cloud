import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit{
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

  redirectToDetail(id: any) {
    this.router.navigate(["detail", id]);
  }
}
