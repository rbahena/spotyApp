import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Rutas
import { ROUTES } from './app.routes';

// Peticiones http
import { HttpClientModule } from '@angular/common/http';

//Servicio
import { SpotifyService } from './services/spotify.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistaComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        HttpClientModule,
    ],
    providers: [
        SpotifyService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
