import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import{HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { PersonasComponent } from './Components/personas/personas.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroeComponent,
    BuscadorComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
