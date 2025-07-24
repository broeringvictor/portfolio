import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  private readonly blogService = inject(BlogService);
  readonly posts = signal<BlogPost[]>([]);

  ngOnInit(): void {
    this.blogService.getLatestPosts().subscribe(posts => {
      this.posts.set(posts);
    });
  }
}
