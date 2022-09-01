import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './modules/page-a/page-a.component';
import { PageBComponent } from './modules/page-b/page-b.component';

const routes: Routes = [
  {
    path: 'content-a',
    children: [
      {
        path: 'page-a',
        component: PageAComponent
      },
      {
        path: 'page-b',
        component: PageBComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
