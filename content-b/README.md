# Content 

This is a Micro-Frontend application that loaded on demand.

## Implementation
* Create new Angular project
```
ng new content-b
```
* Install dependency that needed for Micro-Frontend
```
ng add ngx-build-plus
ng add @angular/elements
```
> ```@angular/elements``` is used for transforming Angular components into custom elements, meanwile ```ngx-build-plus``` is used for create an Angular single bundle
* In ```app.module.ts``` delete bootstrap array and add component that wanted as Micro-Frontend in ```entryComponents``` array
```
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
```
* Convert component as custom element
```
constructor(injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    customElements.define('content-b', element);
}

ngDoBootstrap() {}
 ```
* To build the Micro-Frontend application, use this command
``` ng build --output-hashing none --single-bundle true ```
