import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw.component';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DrawComponent
  ],
  imports: [
    CommonModule,
    DrawRoutingModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class DrawModule { }
