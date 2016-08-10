System.register(['angular2/core', './album.model'], function(exports_1, context_1) {
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
    var core_1, album_model_1;
    var NewAlbumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_model_1_1) {
                album_model_1 = album_model_1_1;
            }],
        execute: function() {
            NewAlbumComponent = (function () {
                function NewAlbumComponent() {
                    this.onSubmitNewAlbum = new core_1.EventEmitter();
                }
                NewAlbumComponent.prototype.addAlbum = function (userTitle, userArtist, userGenre, userPrice) {
                    var newAlbum = new album_model_1.Album(userTitle.value, userArtist.value, userGenre.value, parseInt(userPrice.value));
                    userTitle.value = "";
                    userArtist.value = "";
                    userGenre.value = "";
                    userPrice.value = "";
                    this.onSubmitNewAlbum.emit(newAlbum);
                };
                NewAlbumComponent = __decorate([
                    core_1.Component({
                        selector: 'new-album',
                        outputs: ['onSubmitNewAlbum'],
                        template: "\n  <div class=\"task-form\">\n    <h3>Add a new album to inventory:</h3>\n    <input placeholder=\"Title\" #newTitle>\n    <input placeholder=\"Artist\" #newArtist>\n    <input placeholder=\"Genre\" #newGenre>\n    <input placeholder=\"Price\" #newPrice>\n    <button (click)=\"addAlbum(newTitle, newArtist, newGenre, newPrice)\" class=\"btn btn-primary\">Add</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewAlbumComponent);
                return NewAlbumComponent;
            }());
            exports_1("NewAlbumComponent", NewAlbumComponent);
        }
    }
});
//# sourceMappingURL=new-album.component.js.map