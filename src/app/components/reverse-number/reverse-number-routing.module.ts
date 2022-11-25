import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReverseNumberComponent } from '../reverse-number/reverse-number.component';

const routes: Routes = [{ path: '', component: ReverseNumberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReverseNumberRoutingModule { }
