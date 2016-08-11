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
      new Album("Contra", "Vampire Weekend", "Alternative", 19.99),
      new Album("Dangerous Woman", "Ariana Grande", "Pop", 18.99),
      new Album("Good Kid, M.A.A.D City", "Kendrick Lamar", "Rap", 19.99),
      new Album("Panda Bear Meets The Grim Reaper", "Panda Bear", "Electronic", 19.99),
      new Album("Lemonade", "Beyonce", "R&B", 35.99),
      new Album("Emotion", "Carly Rae Jepsen", "Pop", 19.99),
      new Album("Currents", "Tame Impala", "Alternative", 27.99)
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('album', clickedAlbum);
  }
}
