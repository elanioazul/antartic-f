import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrierComponent } from './barrier.component';

const routes: Routes = [
  {
    path: '',
    component: BarrierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrierRoutingModule { }
