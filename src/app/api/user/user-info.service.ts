import { Post, User, Comment  } from '../post';
import { DatastoreService } from "../datastore.service";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UserInfoService {
    constructor(private api: DatastoreService) {        
       }
    getUserIno(userId: string){
        this.api.findRecord(User,"1").subscribe(
            (user: User) => console.log(user)
        );
    }
}
