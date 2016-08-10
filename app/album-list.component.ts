import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';
import { ShoppingCartPipe } from './cart.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, NewAlbumComponent],
  pipes: [ShoppingCartPipe],
  template: `
  <div class="shopping-cart">
    <h3>Shopping Cart</h3>
      <album-display *ngFor="#currentAlbum of albumList | cart:filterInCart" [album]="currentAlbum">
      </album-display>
      <p>Total price: </p>
  </div>
  <h1>Albums:</h1>
    <album-display *ngFor="#currentAlbum of albumList | cart:filterNotInCart" [album]="currentAlbum">
    </album-display>
    <new-album  (onSubmitNewAlbum)="addAlbum($event)"></new-album>`
})
export class AlbumListComponent {
  public albumList: Album [];
  public filterNotInCart: boolean=false;
  public filterInCart: boolean=true;

  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  addAlbum(album: Album){
    this.albumList.push(album);
  }
}
