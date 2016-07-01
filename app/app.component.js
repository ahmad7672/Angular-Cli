System.register(['angular2/core', "./post.component"], function(exports_1, context_1) {
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
    var core_1, post_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <post ></post>\n  \n    \n    <post>\n    \n    <p>Pound crash => paypal ,Skrill and payoneer Pounds ma money transaction nhi kar rahaa iss time</p>\n    \n    </post>\n    \n      <post>\n    \n    <p> have made a mobile app Using Front End: AngularJS and Ionic Framework,PhoneGap Plugin Cordova BackEnd WebApi: PHP, App Name : Artist Real Time Mobile App Work: Artist List Show Using BackEnd Rest Api Easily Change The Artist list Order Using Drag and Drop button Delete The Artist In the list  Search The person Easily Also Artist list Scan the person and click the person Also Show the Person detail. Calendar Show the Artist All activity post This Mobile Have Seven Built End  1.Android  2.iPhone  etc</p>\n    \n    </post>\n    ",
                        directives: [post_component_1.Post],
                        providers: [post_component_1.Post]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map