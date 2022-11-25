import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import ngx-translate-messageformat-compiler
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

import {TableModule} from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';
import {FocusTrapModule} from 'primeng/focustrap';

@NgModule({
  declarations: [
    AppComponent,
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
