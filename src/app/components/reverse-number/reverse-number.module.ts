import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReverseNumberRoutingModule } from './reverse-number-routing.module';
import { ReverseNumberComponent } from './reverse-number.component';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReverseNumberComponent
  ],
  imports: [
    CommonModule,
    ReverseNumberRoutingModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class ReverseNumberModule { }
