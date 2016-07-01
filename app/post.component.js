System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Post;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Post = (function () {
                function Post() {
                    this.shareIt = new core_1.EventEmitter;
                    this.myPost = {
                        bookMark: false,
                        report: false,
                        hide: true,
                        share: false,
                        text: "YES its share"
                    };
                }
                Post.prototype.bookMarkClick = function () {
                    this.myPost.bookMark = !this.myPost.bookMark;
                };
                Post.prototype.reportClick = function () {
                    this.myPost.report = !this.myPost.report;
                };
                Post.prototype.hideClick = function () {
                    this.myPost.hide = !this.myPost.hide;
                };
                Post.prototype.shareClick = function () {
                    this.myPost.share = !this.myPost.share;
                    console.log("yes");
                    this.shareIt.emit({ status: this.myPost });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Post.prototype, "shareIt", void 0);
                Post = __decorate([
                    core_1.Component({
                        selector: "post",
                        styleUrls: ['app/post.style.css'],
                        templateUrl: "app/post.template.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], Post);
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});
//# sourceMappingURL=post.component.js.map