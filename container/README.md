# Container

This is an Angular application where all the Micro-Frontends are loaded.

## Implementation

* Create new Angular project. 
```
ng new container
```
* Add ```'CUSTOM_ELEMENTS_SCHEMA'``` to ```'@NgModule.schemas'``` in ```app.modules.ts```
```
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```
## Dynamic Micro-Frontend
In this case I'm using dynamic Micro-Frontend that loaded when URL hit (on demand).

* ```app-routing.module.ts```
```
const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: ':app', component: LayoutComponent }
];
```
The ```path: ':app'``` used whenever the URL hit, it will redirect to LayoutComponent
* In the ```LayoutComponent``` the ```<div class="content" id="content"``` added to load the Micro-Frontend
```
<app-sidebar></app-sidebar>
<div id="content" class="content">
  <!-- Micro Frontend Here -->
</div>
```
* Create service file and add the logic for dynamically adding the script tag for Micro-Frontend's main.js. So if any component want to load any Micro-Frontend on demand, we can call the function.
``` 
load(item: any) {
    const content = document.getElementById('content')!;
 
    // Create element
    const element = document.createElement(item.element);
 
 
    // Prevent to load two custom element on DOM
    if (content.hasChildNodes()) {
      if (content.firstChild) {
        content.removeChild(content.firstChild);
      }
    }
    content.appendChild(element);
 
    if (!document.getElementById(`${item.element}_js`)) {
      const script = document.createElement('script');
      script.setAttribute('src', item.src);
      script.setAttribute('id', `${item.element}_js`);
      script.onload = () => {
        console.log(`${item.element} loaded`);
      };
      document.body.appendChild(script);
    }
}
```

