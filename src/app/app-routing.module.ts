import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./components/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'fizBuzz',
    loadChildren: () => import('./components/fiz-buzz/fiz-buzz.module').then(m => m.FizBuzzModule)
  },
  {
    path: 'reverseNumber',
    loadChildren: () => import('./components/reverse-number/reverse-number.module').then(m => m.ReverseNumberModule)
  },
  {
    path: 'gears',
    loadChildren: () => import('./components/gears/gears.module').then(m => m.GearsModule)
  },
  {
    path: 'draw',
    loadChildren: () => import('./components/draw/draw.module').then(m => m.DrawModule)
  },
  {
    path: 'knjiznica',
    loadChildren: () => import('./components/knjiznica/knjiznica.module').then(m => m.KnjiznicaModule)
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
