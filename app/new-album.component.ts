import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
  <div class="task-form">
    <h3>Add a new album to inventory:</h3>
    <input placeholder="Title" #newTitle>
    <input placeholder="Artist" #newArtist>
    <input placeholder="Genre" #newGenre>
    <input placeholder="Price" #newPrice>
    <button (click)="addAlbum(newTitle, newArtist, newGenre, newPrice)" class="btn btn-primary">Add</button>
  </div>
  `
})
export class NewAlbumComponent{
  public onSubmitNewAlbum: EventEmitter<Album>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userTitle: HTMLInputElement, userArtist: HTMLInputElement, userGenre: HTMLInputElement, userPrice: HTMLInputElement){
    var newAlbum = new Album(userTitle.value, userArtist.value, userGenre.value, parseInt(userPrice.value));
    userTitle.value = "";
    userArtist.value = "";
    userGenre.value = "";
    userPrice.value = "";
    this.onSubmitNewAlbum.emit(newAlbum);
  }
}
