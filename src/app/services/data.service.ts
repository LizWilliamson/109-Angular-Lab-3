import { Post } from './../models/Post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: Post[] = [];

  constructor() { }

  public savePost(post){
    this.posts.push(post);

  }

  public getAllPost(){
    return this.posts;
  }


}
