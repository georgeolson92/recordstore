import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "byartist"
})
export class ArtistPipe implements PipeTransform {
  transform(value, args?) {
    let [artistName] = args;

    return value.filter(album => {
      return album.artist === artistName;
    });
  }
}
