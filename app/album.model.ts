import { Component } from 'angular2/core';

export class Album {
  public cart: boolean = false;
  constructor(public title: string, public artist: string, public genre: string, public price: number){}
  addToCart() {
      this.cart = true;
  }
  removeFromCart() {
      this.cart = false;
  }
}
