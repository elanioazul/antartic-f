import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarrierRoutingModule } from './barrier-routing.module';
import { BarrierComponent } from './barrier.component';


@NgModule({
  declarations: [
    BarrierComponent
  ],
  imports: [
    CommonModule,
    BarrierRoutingModule
  ]
})
export class BarrierModule { }
