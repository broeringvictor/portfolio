import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgOptimizedImage } from '@angular/common';
import { Observable } from 'rxjs';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, DatePipe, NgOptimizedImage],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  public posts$!: Observable<BlogPost[]>;
  

  // Injeta o serviço no construtor
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // Chama o serviço para buscar os posts quando o componente é inicializado
    this.posts$ = this.blogService.getLatestPosts();
  }
}