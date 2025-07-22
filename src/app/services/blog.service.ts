import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// A interface não precisa de alterações.
export interface BlogPost {
  title: string;
  brief: string;
  url: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly HASHNODE_API_URL = 'https://gql.hashnode.com/';
  private readonly PUBLICATION_HOST = 'victor-broering.hashnode.dev';

  constructor(private http: HttpClient) { }

  getLatestPosts(): Observable<BlogPost[]> {
    const query = `
      query GetPublicationArticles($host: String!) {
        publication(host: $host) {
          posts(first: 5) {
            edges {
              node {
                title
                brief
                url
                publishedAt
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    `;


    return this.http.post<{ data: { publication: { posts: { edges: { node: BlogPost }[] } } } }>(this.HASHNODE_API_URL, {
      query,
      variables: {
        host: this.PUBLICATION_HOST 
      }
    }).pipe(

      map(response => response.data.publication.posts.edges.map(edge => edge.node))
    );
  }
}