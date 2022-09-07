import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { ElementAAComponent } from './element-a-a/element-a-a.component';
import { ElementABComponent } from './element-a-b/element-a-b.component';


@NgModule({
  declarations: [
    ElementAAComponent,
    ElementABComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule {
 }
