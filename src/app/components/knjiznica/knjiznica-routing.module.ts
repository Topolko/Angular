import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnjiznicaComponent } from '../knjiznica/knjiznica.component';

const routes: Routes = [{ path: '', component: KnjiznicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnjiznicaRoutingModule { }
