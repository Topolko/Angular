import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizBuzzComponent } from '../fiz-buzz/fiz-buzz.component';

const routes: Routes = [{ path: '', component: FizBuzzComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FizBuzzRoutingModule { }
