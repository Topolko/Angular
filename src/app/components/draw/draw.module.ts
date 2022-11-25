import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawComponent } from './draw.component';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import { TranslateModule } from '@ngx-translate/core';

import { OpsegTrokutPipe } from './pipes/opsegTrokut.pipe';
import { PovrsinaTrokutPipe } from './pipes/povrsinaTrokut.pipe';

import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    DrawComponent,
    OpsegTrokutPipe,
    PovrsinaTrokutPipe
  ],
  imports: [
    CommonModule,
    DrawRoutingModule,
    FormsModule,
    TranslateModule,
    TableModule
  ],
  exports: [
    TranslateModule
  ]
})
export class DrawModule { }
