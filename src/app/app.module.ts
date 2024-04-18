import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { UserNavbarComponent } from './common/user-navbar/user-navbar.component';
import { MoviesComponent } from './common/movies/movies.component';
import { TvShowsComponent } from './common/tv-shows/tv-shows.component';
import { AnimeComponent } from './common/anime/anime.component';
import { FavouriteComponent } from './common/favourite/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CarouselComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    UserNavbarComponent,
    MoviesComponent,
    TvShowsComponent,
    AnimeComponent,
    FavouriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
