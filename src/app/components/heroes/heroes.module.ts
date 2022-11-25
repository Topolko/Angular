import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
  
})
export class HeroesModule { }
