import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PantryDataService {
  items = [];

  constructor() { 
    console.log('Utilizing PantryDataService');
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index,1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index]= item;
  }
}
