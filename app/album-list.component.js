System.register(['angular2/core', './album.component', './new-album.component', './cart.pipe'], function(exports_1, context_1) {
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
    var core_1, album_component_1, new_album_component_1, cart_pipe_1;
    var AlbumListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (new_album_component_1_1) {
                new_album_component_1 = new_album_component_1_1;
            },
            function (cart_pipe_1_1) {
                cart_pipe_1 = cart_pipe_1_1;
            }],
        execute: function() {
            AlbumListComponent = (function () {
                function AlbumListComponent() {
                    this.filterNotInCart = false;
                    this.filterInCart = true;
                    this.onAlbumSelect = new core_1.EventEmitter();
                }
                AlbumListComponent.prototype.albumClicked = function (clickedAlbum) {
                    console.log('child', clickedAlbum);
                    this.selectedAlbum = clickedAlbum;
                    this.onAlbumSelect.emit(clickedAlbum);
                };
                AlbumListComponent.prototype.addAlbum = function (album) {
                    this.albumList.push(album);
                };
                AlbumListComponent = __decorate([
                    core_1.Component({
                        selector: 'album-list',
                        inputs: ['albumList'],
                        outputs: ['onAlbumSelect'],
                        directives: [album_component_1.AlbumComponent, new_album_component_1.NewAlbumComponent],
                        pipes: [cart_pipe_1.ShoppingCartPipe],
                        template: "\n  <div class=\"shopping-cart\">\n    <h3>Shopping Cart</h3>\n      <album-display *ngFor=\"#currentAlbum of albumList | cart:filterInCart\" [album]=\"currentAlbum\">\n      </album-display>\n      <p>Total price: </p>\n  </div>\n  <h1>Albums:</h1>\n    <album-display *ngFor=\"#currentAlbum of albumList | cart:filterNotInCart\" [album]=\"currentAlbum\">\n    </album-display>\n    <new-album  (onSubmitNewAlbum)=\"addAlbum($event)\"></new-album>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumListComponent);
                return AlbumListComponent;
            }());
            exports_1("AlbumListComponent", AlbumListComponent);
        }
    }
});
//# sourceMappingURL=album-list.component.js.map