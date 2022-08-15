import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

const routes: Routes = [
  {
    path: 'content-a',
    component: AppComponent
  },
  {
    path: 'content-a/page-a',
    component: PageAComponent
  },
  {
    path: 'content-a/page-b',
    component: PageBComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
