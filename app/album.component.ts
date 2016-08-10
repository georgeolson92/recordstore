import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div class="album">
      <h3>{{ album.title }} | {{ album.artist }}</h3>
      <p>{{ album.genre }}</p>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
}
