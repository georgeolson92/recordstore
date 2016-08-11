import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "bygenre"
})
export class GenrePipe implements PipeTransform {
  transform(value, args?) {
    let [artistGenre] = args;

    return value.filter(album => {
      return album.genre === artistGenre;
    });
  }
}
