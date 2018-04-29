import { Component } from '@angular/core';
import {Post} from './Post';

import {PostService} from './services/post.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>My Blog</h1>
        <ul>
            <li *ngFor="let post of posts">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </li>
        </ul>
    `,
    providers: [PostService]
})
export class AppComponent {
    posts:Post[];
    constructor(private _postService:PostService){
        this._postService.getPosts().then(posts => {
            this.posts = posts;
        });
    }
}