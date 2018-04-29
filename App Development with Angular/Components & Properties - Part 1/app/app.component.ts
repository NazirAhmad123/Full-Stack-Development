import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <h1>{{title}}</h1>
        <img src="{{person.avatar}}">
        <p>About Me: My name is {{person.name}} and I am {{person.age}} years old</p>
        <div *ngIf="showAddress">
            <h3>Address</h3>
            <ul>
                <li>{{person.address.street}}</li>
                <li>{{person.address.city}}</li>
                <li>{{person.address.state}}</li>
            </ul>
        </div>
        <h3>Friends</h3>
        <ul>
            <li *ngFor="let friend of person.friends">
                {{friend.name}}
            </li>
        </ul>
    </div>
    `
})
export class AppComponent { 
    title = 'Hello World';
    showAddress = false;
    person = {
        name:'John Doe',
        age:34,
        address:{
            street: '400 Walnut st',
            city:'Lynn',
            state: 'MA'
        },
        avatar:'https://d35bxr3ccprye3.cloudfront.net/images/blank-avatar.gif',
        friends: [
            {name:'Bob', age:34},
            {name:'Shelly', age:36},
            {name:'Jack', age:32},
            {name:'Steve', age:40}
        ]
    }
    
    constructor(){
        this.title = 'User Profile';
    }
}
