import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
            <button (click)="clicked($event)">Click</button>
            <input type="text" [(ngModel)]="text" name="text" (keyup.enter)="showText($event)">
            <h1>{{text}}</h1>
    `
})
export class AppComponent { 
    text:string;
    
    constructor(){
        this.text = 'Hello';
    }
    
    clicked(event){
        console.log(event);
        this.text='Button Clicked';
    }
    
    showText(event){
        //console.log(event.target.value);
        console.log(this.text);
    }
}
