import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { FizBuzzComponent } from './components/fiz-buzz/fiz-buzz.component';
import { ReverseNumberComponent } from './components/reverse-number/reverse-number.component';
import { GearsComponent } from './components/gears/gears.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DrawComponent } from './components/draw/draw.component';

// import ngx-translate and the http loader
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import ngx-translate-messageformat-compiler
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { KnjiznicaComponent } from './components/knjiznica/knjiznica.component';

import {TableModule} from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';
import {FocusTrapModule} from 'primeng/focustrap';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    FizBuzzComponent,
    ReverseNumberComponent,
    GearsComponent,
    MessagesComponent,
    DrawComponent,
    KnjiznicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    FocusTrapModule,
    TableModule,
    SelectButtonModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
