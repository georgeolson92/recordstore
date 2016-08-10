System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(title, artist, genre, price) {
                    this.title = title;
                    this.artist = artist;
                    this.genre = genre;
                    this.price = price;
                    this.cart = false;
                }
                Album.prototype.addToCart = function () {
                    this.cart = true;
                };
                Album.prototype.removeFromCart = function () {
                    this.cart = false;
                };
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.model.js.map