import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { APP_ROUTING } from './app.routes';
import { SpeciesColorTypeDirective } from './directives/species-color-type.directive';
import { PokemonTypesComponent } from './components/pokemon-types/pokemon-types.component';
import { PokemonImagePipe } from './pipes/pokemon-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonDetailComponent,
    SpeciesColorTypeDirective,
    PokemonTypesComponent,
    PokemonImagePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
