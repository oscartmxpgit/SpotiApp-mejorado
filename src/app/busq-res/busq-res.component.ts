import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAPIService } from './../shared/services/spotify-api.service';

@Component({
  selector: 'app-busq-res',
  templateUrl: './busq-res.component.html',
  styleUrls: ['./busq-res.component.scss']
})
export class BusqResComponent implements OnInit {
  public artistName: any;
  public resultados: any;
  error: any
  mensajeError: any;
  loading: any;

  constructor(protected _spotify: SpotifyAPIService,
    protected route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      this.artistName = parameters['nombre'];
    });
    this.error = false;
    this.mensajeError = "";
    this.loading = true;

    _spotify.getToken().subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.access_token != undefined){
          this._spotify.search(this.artistName, data.access_token)
              .subscribe({
                next:(data: any) =>{
                  console.log(data.album);
                  this.resultados = data;
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
