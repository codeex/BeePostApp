import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { HttpClient } from '@angular/common/http';
import { Post, User, Comment } from './post';

const config: DatastoreConfig = {
  // apiVersion: "1.0",
  baseUrl: 'http://localhost:8000/api',
  models: {    
    posts: Post,
    comments: Comment,
    users: User
  }
};

@Injectable({
  providedIn: 'root'
})
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore {

  constructor(http: HttpClient) {
    super(http);
   }
}
