import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementAAComponent } from './element-a-a/element-a-a.component';
import { ElementABComponent } from './element-a-b/element-a-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'a'
  },
  {
    path: 'a',
    component: ElementAAComponent
  },
  {
    path: 'b',
    component: ElementABComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
