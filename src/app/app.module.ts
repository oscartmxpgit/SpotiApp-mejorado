import { SpotifyAPIService } from './shared/services/spotify-api.service';
import { DomseguroPipe } from './shared/pipes/domseguro.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SinfotoPipe } from './shared/pipes/sinfoto.pipe';
import { AlbumboxComponent } from './albumbox/albumbox.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { BusqResComponent } from './busq-res/busq-res.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusquedaComponent,

    SinfotoPipe,
    DomseguroPipe,
    AlbumboxComponent,
    ArtistsongsComponent,
    BusqResComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
