import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAPIService } from '../shared/services/spotify-api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {


  constructor(protected spotify:SpotifyAPIService, private router:Router){}


   public buscar(nombre:string){
    this.router.navigate(['/resultados',nombre])

  }

  ngOnInit(): void {
  }

}
