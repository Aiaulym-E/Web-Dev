import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component/home.component';
import { AboutComponent } from './about/about.component/about.component';
import { AlbumsComponent } from './albums/albums.component/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: '**', redirectTo: 'home' }
];