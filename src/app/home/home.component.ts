import { SpotifyAPIService } from './../shared/services/spotify-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevosAlbunes: any[] = [];
  error:any
  mensajeError:any;
  loading:any;

  constructor(private _spotify: SpotifyAPIService) {
    this.error=false;
    this.mensajeError="";
    this.loading=true;

    _spotify.getToken().subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.access_token != undefined){
          this._spotify.getNewReleases(data.access_token)
            .subscribe({
              next:(data: any) =>{
                console.log(data.album);
                this.nuevosAlbunes=data;
                this.loading=false;
              },
              error:()=> {
                this.error = true;
                this.mensajeError = "no ha sido posible obtener el tocken";
              }});
        }
        else {
          this.error = true;
          this.mensajeError = "No ha sido posible obtener el token";
        }
        this.loading = false;
      }
      ,
      error: (errorServicio) => {
        this.error = true;
        this.loading = false;
        console.log(errorServicio);
        this.mensajeError = "No ha sido posible obtener el token";
      }
    });
  }






  ngOnInit(): void {
  }

}
