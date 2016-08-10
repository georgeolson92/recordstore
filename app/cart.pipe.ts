import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe ({
  name: "cart",
  pure: false
})

export class ShoppingCartPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredState = args[0];

    return input.filter((album) => (album.cart === desiredState));
  }
}
