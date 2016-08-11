System.register(['angular2/core', './album.component', './new-album.component', './cart.pipe', './artist.pipe', './genre.pipe'], function(exports_1, context_1) {
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
    var core_1, album_component_1, new_album_component_1, cart_pipe_1, artist_pipe_1, genre_pipe_1;
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
            },
            function (artist_pipe_1_1) {
                artist_pipe_1 = artist_pipe_1_1;
            },
            function (genre_pipe_1_1) {
                genre_pipe_1 = genre_pipe_1_1;
            }],
        execute: function() {
            AlbumListComponent = (function () {
                function AlbumListComponent() {
                    this.filterNotInCart = false;
                    this.filterInCart = true;
                    this.showAll = true;
                    this.showArtist = false;
                    this.showGenre = false;
                    this.onAlbumSelect = new core_1.EventEmitter();
                }
                AlbumListComponent.prototype.displayByArtist = function () {
                    this.showArtist = true;
                    this.showAll = false;
                    this.showGenre = false;
                };
                AlbumListComponent.prototype.displayAll = function () {
                    this.showArtist = false;
                    this.showAll = true;
                    this.showGenre = false;
                };
                AlbumListComponent.prototype.displayByGenre = function () {
                    this.showGenre = true;
                    this.showAll = false;
                    this.showArtist = false;
                };
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
                        pipes: [cart_pipe_1.ShoppingCartPipe, artist_pipe_1.ArtistPipe, genre_pipe_1.GenrePipe],
                        template: "\n  <div class=\"info-box\">\n    <h3>Shopping Cart</h3>\n      <album-display *ngFor=\"#currentAlbum of albumList | cart:filterInCart\" [album]=\"currentAlbum\">\n      </album-display>\n      <p>Total price: $<span id=\"price\">0</span></p>\n  </div>\n  <h1>Albums:</h1>\n    Artist: <input [(ngModel)]=\"artistValue\"/>\n    <button (click)=\"displayByArtist()\" class=\"btn btn-primary\">Display albums by artist</button>\n    Genre: <input [(ngModel)]=\"genreValue\"/>\n    <button (click)=\"displayByGenre()\" class=\"btn btn-info\">Display albums by genre</button>\n    <button (click)=\"displayAll()\" class=\"btn btn-success\">Display all albums</button>\n    <div class=\"all-artists\" *ngIf=\"showAll\">\n      <album-display *ngFor=\"#currentAlbum of albumList | cart:filterNotInCart\" [album]=\"currentAlbum\">\n      </album-display>\n    </div>\n    <div class=\"by-artist\" *ngIf=\"showArtist\">\n      <h2>Albums by artist</h2>\n      <album-display *ngFor=\"#currentAlbum of albumList | byartist:artistValue\" [album]=\"currentAlbum\">\n      </album-display>\n    </div>\n    <div class=\"by-genre\" *ngIf=\"showGenre\">\n      <h2>Albums by genre</h2>\n      <album-display *ngFor=\"#currentAlbum of albumList | bygenre:genreValue\" [album]=\"currentAlbum\">\n      </album-display>\n    </div>\n    <hr>\n    <new-album  (onSubmitNewAlbum)=\"addAlbum($event)\"></new-album>"
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