import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FizBuzzComponent } from './components/fiz-buzz/fiz-buzz.component';
import { ReverseNumberComponent } from './components/reverse-number/reverse-number.component';
import { GearsComponent } from './components/gears/gears.component';
import { DrawComponent } from './components/draw/draw.component';
import { KnjiznicaComponent } from './components/knjiznica/knjiznica.component';


const routes: Routes = [
  { path: '', component: HeroesComponent, pathMatch: 'full', data: { state: 'heroes' } },
  { path: 'heroes', component: HeroesComponent },
  { path: 'fizBuzz', component: FizBuzzComponent },
  { path: 'reverseNumber', component: ReverseNumberComponent },
  { path: 'gears', component: GearsComponent },
  { path: 'draw', component: DrawComponent },
  { path: 'knjiznica', component: KnjiznicaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
