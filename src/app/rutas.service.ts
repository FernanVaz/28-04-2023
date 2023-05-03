import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  menuItems = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
    { name: 'Docs', route: '/docks' }
  ];
  constructor() { }
}
