import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GearsComponent } from '../gears/gears.component';

const routes: Routes = [{ path: '', component: GearsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GearsRoutingModule { }
