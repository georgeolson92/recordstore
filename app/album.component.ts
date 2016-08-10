import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div class="album">
      <h4>{{ album.title }} | {{ album.artist }}</h4>
      <p class="genre">Genre: {{ album.genre }}</p>
      <p class="price">Price: \${{ album.price }}</p>
      <button (click)="buyAlbum()" class="btn btn-primary" [class.hidden]="album.cart === true">Add to cart</button>
      <button (click)="unBuyAlbum()" class="btn btn-danger" [class.hidden]="album.cart === false">Remove from cart</button>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
  buyAlbum() {
    this.album.addToCart();
  }
  unBuyAlbum() {
    this.album.removeFromCart();
  }
}
