"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('./services/post.service');
var AppComponent = (function () {
    function AppComponent(_postService) {
        var _this = this;
        this._postService = _postService;
        this._postService.getPosts().then(function (posts) {
            _this.posts = posts;
        });
    }
    AppComponent.prototype.addPost = function () {
        var newPost = {
            title: this.title,
            body: this.body
        };
        this._postService.addPost(newPost);
        return false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>My Blog</h1>\n        <form (submit)=\"addPost()\">\n            <input [(ngModel)]=\"title\" name=\"title\" type=\"text\" placeholder=\"Post Title\">\n            <br><br>\n            <textarea [(ngModel)]=\"body\" name=\"body\" placeholder=\"Post Body\"></textarea>\n            <br><br>\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n        <ul>\n            <li *ngFor=\"let post of posts\">\n                <h3>{{post.title}}</h3>\n                <p>{{post.body}}</p>\n            </li>\n        </ul>\n    ",
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map