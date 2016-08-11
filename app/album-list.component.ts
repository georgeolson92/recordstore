import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';
import { ShoppingCartPipe } from './cart.pipe';
import { ArtistPipe } from './artist.pipe';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, NewAlbumComponent],
  pipes: [ShoppingCartPipe, ArtistPipe, GenrePipe],
  template: `
  <div class="info-box">
    <h3>Shopping Cart</h3>
      <album-display *ngFor="#currentAlbum of albumList | cart:filterInCart" [album]="currentAlbum">
      </album-display>
      <p>Total price: </p>
  </div>
  <h1>Albums:</h1>
    Artist: <input [(ngModel)]="artistValue"/>
    Genre: <input [(ngModel)]="genreValue"/>
    <button (click)="displayByArtist()" class="btn btn-primary">Display albums by artist</button>
    <button (click)="displayByGenre()" class="btn btn-info">Display albums by genre</button>
    <button (click)="displayAll()" class="btn btn-success">Display all albums</button>
    <div class="all-artists" *ngIf="showAll">
      <album-display *ngFor="#currentAlbum of albumList | cart:filterNotInCart" [album]="currentAlbum">
      </album-display>
    </div>
    <div class="by-artist" *ngIf="showArtist">
      <h2>Albums by artist</h2>
      <album-display *ngFor="#currentAlbum of albumList | byartist:artistValue" [album]="currentAlbum">
      </album-display>
    </div>
    <div class="by-genre" *ngIf="showGenre">
      <h2>Albums by genre</h2>
      <album-display *ngFor="#currentAlbum of albumList | bygenre:genreValue" [album]="currentAlbum">
      </album-display>
    </div>
    <hr>
    <new-album  (onSubmitNewAlbum)="addAlbum($event)"></new-album>`
})
export class AlbumListComponent {
  public albumList: Album [];
  public filterNotInCart: boolean=false;
  public filterInCart: boolean=true;

  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public showAll = true;
  public showArtist = false;
  public showGenre = false;

  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }

  displayByArtist(): void {
    this.showArtist = true;
    this.showAll = false;
    this.showGenre = false;
  }
  displayAll(): void {
    this.showArtist = false;
    this.showAll = true;
    this.showGenre = false;
  }
  displayByGenre(): void {
    this.showGenre = true;
    this.showAll = false;
    this.showArtist = false;
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
