System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(title, artist, genre) {
                    this.title = title;
                    this.artist = artist;
                    this.genre = genre;
                }
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.model.js.map