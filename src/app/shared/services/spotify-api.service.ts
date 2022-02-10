import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Inject, Injectable } from '@angular/core';
import { from, map, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpotifyAPIService {

  client_id = "37d43ec110d94c11bc499e8b84f10fb8";

  token = 'BQBX5_CUerdvB1579_zwAqfsWezWAFkPoGfTgJ19CxHH5R2PrTy2PoutSZGxigvcacgj7F24kkoW_BARycI';


  getToken() {

    const url = 'http://localhost:3000/spotify/' + this.client_id;
    return (this.http.get(url))
  }

  headers = new HttpHeaders({
    //'authorization': 'Bearer ' + this.token
    'authorization': 'Bearer ' + this.token

  });

  constructor(private http: HttpClient) {
    console.log('servicio spotify listo');
  }

  getNewReleases(token: string) {
    const url = 'https://api.spotify.com/v1/browse/new-releases';
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + token
    });
    return this.http.get<any>(url, { headers })
      .pipe(map((data: any) => data.albums.items));
  }

  search(artist: string, token: string) {
    //https://api.spotify.com/v1/search?q=Metallica&type=artist
    const url2 = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist';
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + token
    });

    return (this.http.get(url2, { headers }))
  }

  getArtistInfo(id: string) {
    const url2 = 'https://api.spotify.com/v1/artists/' + id;
    const headers = this.headers;

    return (this.http.get(url2, { headers }))
  }

  getsongs(id: string) {
    const url2 = 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=us';
    const headers = this.headers;
    return (this.http.get(url2, { headers }))
  }


}
