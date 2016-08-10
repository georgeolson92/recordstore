import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <h1>Record Store</h1>
    <album-list [albumList]="albums"></album-list>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Album", "Artist", "Genre"),
      new Album("Album1", "Artist1", "Genre1"),
      new Album("Album2", "Artist2", "Genre2")
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('album', clickedAlbum);
  }
}
