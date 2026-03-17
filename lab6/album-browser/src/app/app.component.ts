import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Hello, {{ title }}</h1> 
    
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/albums">Albums</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  // Renamed or added 'title' to match what the spec file is looking for
  title = 'album-browser'; 
  
  // You can keep newTitle if you are using it for your logic elsewhere
  newTitle = ''; 
}