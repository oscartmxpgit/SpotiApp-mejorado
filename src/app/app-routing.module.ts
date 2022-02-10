import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { BusqResComponent } from './busq-res/busq-res.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'buscar',
    component: BusquedaComponent,
    pathMatch: 'full'
  },
  {
    path: 'artista/:id',
    component: ArtistsongsComponent,
    pathMatch: 'full'
  },
  {
    path: 'resultados/:nombre',
    component: BusqResComponent,
    pathMatch: 'full'
  },

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
