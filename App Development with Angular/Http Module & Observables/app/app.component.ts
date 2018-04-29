import { Component } from '@angular/core';
import {Post} from './Post';

import {PostService} from './services/post.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
        <h1 class="text-center">My Blog</h1>
        <form class="well" (submit)="addPost()">
            <input class="form-control" [(ngModel)]="title" name="title" type="text" placeholder="Post Title">
            <br><br>
            <textarea class="form-control" [(ngModel)]="body" name="body" placeholder="Post Body"></textarea>
            <br><br>
            <input class="btn btn-primary btn-block" type="submit" value="Submit">
        </form>
        <div>
            <div class="panel" *ngFor="let post of posts">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </div>
        </div>
    `,
    providers: [PostService]
})
export class AppComponent {
    posts:Post[];
    title: string;
    body: string;
    
    constructor(private _postService:PostService){
        this._postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    
    addPost(){
        var newPost = {
            title: this.title,
            body: this.body
        }
        
        this._postService.addPost(newPost).subscribe(post => {
            this.posts.push(post);
        });
        return false;
    }
}