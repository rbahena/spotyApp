import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [
    ]
})
export class HomeComponent implements OnInit {

    nuevasCanciones: any[] = [];

    constructor(private spotifyService: SpotifyService) {
        this.spotifyService.getNewReleases().subscribe((data:any)  => {
            console.log(data.albums.items);
            this.nuevasCanciones = data.albums.items;
        })
    }

    ngOnInit(): void {
    }

}
