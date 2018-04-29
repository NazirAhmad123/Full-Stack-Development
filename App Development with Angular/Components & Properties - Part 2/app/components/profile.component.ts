import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'profile',
    templateUrl:'profile.component.html'
})
export class ProfileComponent { 
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
