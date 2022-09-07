import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { ElementBAComponent } from './element-b-a/element-b-a.component';
import { ElementBBComponent } from './element-b-b/element-b-b.component';


@NgModule({
  declarations: [
    ElementBAComponent,
    ElementBBComponent
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
