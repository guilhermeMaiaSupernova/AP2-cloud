import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>("http://localhost:8080/post");
  }
  public getPostById(id: any): Observable<Post> {
    return this.httpClient.get<Post>("http://localhost:8080/post/" + id);
  }
}
