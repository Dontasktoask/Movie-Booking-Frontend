import { TvShowsComponent } from './common/tv-shows/tv-shows.component';
import { MoviesComponent } from './common/movies/movies.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { RegisterComponent } from './common/register/register.component';
import { LoginComponent } from './common/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './common/anime/anime.component';

const routes: Routes = [
  {path:'', redirectTo: 'Home',pathMatch:'full'},
  {path: 'login' , component:LoginComponent},
  {path: 'register' , component:RegisterComponent},
  {path: 'Home', component:LandingPageComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tvShows', component:TvShowsComponent},
  {path: 'anime', component:AnimeComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
