System.register(['angular2/core'], function(exports_1, context_1) {
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
    var AlbumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AlbumComponent = (function () {
                function AlbumComponent() {
                }
                AlbumComponent.prototype.buyAlbum = function () {
                    this.album.addToCart();
                };
                AlbumComponent.prototype.unBuyAlbum = function () {
                    this.album.removeFromCart();
                };
                AlbumComponent = __decorate([
                    core_1.Component({
                        selector: 'album-display',
                        inputs: ['album'],
                        template: "\n    <div class=\"col-md-4\">\n      <div class=\"album\">\n        <h3>{{ album.title }}</h3>\n        <h4>{{ album.artist }}</h4>\n        <p class=\"genre\">Genre: {{ album.genre }}</p>\n        <p class=\"price\">Price: ${{ album.price }}</p>\n        <button (click)=\"buyAlbum()\" class=\"btn btn-primary\" [class.hidden]=\"album.cart === true\">Add to cart</button>\n        <button (click)=\"unBuyAlbum()\" class=\"btn btn-danger\" [class.hidden]=\"album.cart === false\">Remove from cart</button>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumComponent);
                return AlbumComponent;
            }());
            exports_1("AlbumComponent", AlbumComponent);
        }
    }
});
//# sourceMappingURL=album.component.js.map