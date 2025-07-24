import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { Blog } from './blog';
import { BlogService } from '../../services/blog.service';

describe('Blog', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;
  let blogServiceSpy: jasmine.SpyObj<BlogService>;

  beforeEach(async () => {
    blogServiceSpy = jasmine.createSpyObj('BlogService', ['getLatestPosts']);
    blogServiceSpy.getLatestPosts.and.returnValue(of([
      {
        title: 'Test',
        brief: 'Test brief',
        url: 'https://test.url',
        publishedAt: '2024-01-01',
        coverImage: { url: 'https://img.url' }
      }
    ]));
    await TestBed.configureTestingModule({
      imports: [Blog, HttpClientModule],
      providers: [
        { provide: BlogService, useValue: blogServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize posts$ with blog posts on ngOnInit', (done) => {
    component.ngOnInit();
    component.posts$.subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts[0].title).toBe('Test');
      done();
    });
    expect(blogServiceSpy.getLatestPosts).toHaveBeenCalled();
  });
});
