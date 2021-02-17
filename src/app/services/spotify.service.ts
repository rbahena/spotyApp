import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

    constructor(private http:HttpClient) {
        console.log("Servicio listo");
    }

    

    getNewReleases() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQCfubW2HVKReMq9WgWnPje28sw9_q9YFc3y-6O_woxrHA8NqcrPEEzMX8LsvZ7ux9k-7tJ4zoeNEGVNN_k'
        });
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
    }
}
