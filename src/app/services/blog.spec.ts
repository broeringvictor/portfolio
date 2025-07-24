import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        BlogService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch and map blog posts from API', (done) => {
    const mockResponse = {
      data: {
        publication: {
          posts: {
            edges: [
              {
                node: {
                  title: 'Test Title',
                  brief: 'Test Brief',
                  url: 'https://test.url',
                  publishedAt: '2024-01-01',
                  coverImage: { url: 'https://img.url' }
                }
              }
            ]
          }
        }
      }
    };
    httpClientSpy.post.and.returnValue(of(mockResponse));
    service.getLatestPosts().subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts[0].title).toBe('Test Title');
      expect(posts[0].brief).toBe('Test Brief');
      expect(posts[0].url).toBe('https://test.url');
      expect(posts[0].publishedAt).toBe('2024-01-01');
      expect(posts[0].coverImage?.url).toBe('https://img.url');
      done();
    });
    expect(httpClientSpy.post).toHaveBeenCalled();
  });
});
