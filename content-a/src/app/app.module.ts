import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    customElements.define('content-a', element);
  }

  ngDoBootstrap() {}
}
