import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAPIService } from './../shared/services/spotify-api.service';

@Component({
  selector: 'app-artistsongs',
  templateUrl: './artistsongs.component.html',
  styleUrls: ['./artistsongs.component.scss']
})
export class ArtistsongsComponent implements OnInit {

  public artist: any;
  public songs: any;
  public artistId: any;



  constructor(protected _spotify: SpotifyAPIService,
    protected route: ActivatedRoute)
   {
      this.route.params.subscribe(parameters => {
        this.artistId = parameters['id'];

   });
   this._spotify.getArtistInfo(this.artistId)
        .subscribe((data:any)=>{
          this.artist=data;

       });
   this._spotify.getsongs(this.artistId)
        .subscribe((data:any)=>{

          this.songs=data;

       });
  }

  getImg(){
    return "https://embed.spotify.com/?uri=" + this.songs.tracks[0].uri
  }

  ngOnInit(): void {
  }

}
