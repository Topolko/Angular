import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FizBuzzRoutingModule } from './fiz-buzz-routing.module';
import { FizBuzzComponent } from './fiz-buzz.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FizBuzzComponent
  ],
  imports: [
    CommonModule,
    FizBuzzRoutingModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class FizBuzzModule { }
