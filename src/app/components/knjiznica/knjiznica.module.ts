import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnjiznicaRoutingModule } from './knjiznica-routing.module';
import { KnjiznicaComponent } from './knjiznica.component';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';
import {FocusTrapModule} from 'primeng/focustrap';

// import ngx-translate and the http loader
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    KnjiznicaComponent
  ],
  imports: [
    CommonModule,
    KnjiznicaRoutingModule,
    FormsModule,
    TableModule,
    SelectButtonModule,
    ButtonModule,
    FocusTrapModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class KnjiznicaModule { }


