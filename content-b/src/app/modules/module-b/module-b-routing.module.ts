import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementBAComponent } from './element-b-a/element-b-a.component';
import { ElementBBComponent } from './element-b-b/element-b-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'a'
  },
  {
    path: 'a',
    component: ElementBAComponent
  },
  {
    path: 'b',
    component: ElementBBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
