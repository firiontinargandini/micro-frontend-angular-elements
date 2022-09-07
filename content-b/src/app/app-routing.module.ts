import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module-a',
    loadChildren: () => import('./modules/module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path: 'module-b',
    loadChildren: () => import('./modules/module-b/module-b.module').then(m => m.ModuleBModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
