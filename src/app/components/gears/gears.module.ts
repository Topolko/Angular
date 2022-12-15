import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GearsRoutingModule } from './gears-routing.module';
import { GearsComponent } from './gears.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';

import {FocusTrapModule} from 'primeng/focustrap';
import { InputTextModule } from "primeng/inputtext";


@NgModule({
  declarations: [
    GearsComponent
  ],
  imports: [
    CommonModule,
    GearsRoutingModule,
    FormsModule,
    InputTextModule,
    FocusTrapModule,
    TranslateModule,
    ButtonModule
  ],
  exports: [
    TranslateModule
  ]
})
export class GearsModule { }
