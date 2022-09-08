import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

const config = [
  {
    src: 'assets/content-a',
    element: 'content-a',
    route: '/content-a',
    isChild: false
  },
  {
    src: 'assets/content-b',
    element: 'content-b',
    route: '/module-a',
    isChild: true,
    modulesName: 'modules-module-a-module-a-module'
  },
  {
    src: 'assets/content-b',
    element: 'content-b',
    route: '/module-b',
    isChild: true,
    modulesName: 'modules-module-b-module-b-module'
  },
];

@Injectable({
  providedIn: 'root'
})
export class MicrofrontendService implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.subs = [];
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }

  public navigate(url: string) {
    let item = config.find(item => item.route === url);

    if (!item) {
      const prefixUrl = url.split('/').slice(0, 2).join('/');
      item = config.find(item => item.route === prefixUrl);

      if (!item) return;
    };

    this.load(item);
  }

  public load(item: any) {
    // Get file manifest.json from item sources
    const sub = this.http
      .get(`${item.src}/manifest.json`)
      .subscribe((res: any) => {
        if (!res) return;

        // Prevent to load two custom element on DOM
        const content = document.getElementById('content')!;
        if (content.hasChildNodes()) {
          if (content.firstChild) {
            content.removeChild(content.firstChild);
          }
        }

        // Create custom element
        const element = document.createElement(item.element);
        element.id = 'micro_frontend_custom_element';
        content.appendChild(element);

        const head = document.getElementsByTagName('head')[0];

        // Adding script tag of micro frontend main.js
        if (!document.getElementById('micro_frontend_main_js')) {
          this.registerScript(item, res, 'main.js', 'main_js');
        } else {
          const script = document.getElementById('micro_frontend_main_js')!;
          head.removeChild(script);
          this.registerScript(item, res, 'main.js', 'main_js');
        }

        // Adding script tag of micro frontend runtime.js
        if (!document.getElementById('micro_frontend_runtime_js')) {
          this.registerScript(item, res, 'runtime.js', 'runtime_js');
        } else {
          const script = document.getElementById('micro_frontend_runtime_js')!;
          head.removeChild(script);
          this.registerScript(item, res, 'runtime.js', 'runtime_js');
        }

        // If lazy load modules, adding script tag of modules js
        if (item.isChild && !document.getElementById('micro_frontend_modules_js')) {
          this.registerScript(item, res, `${item.modulesName}.js`, 'modules_js');
        } else if (item.isChild && document.getElementById('micro_frontend_modules_js')) {
          const script = document.getElementById('micro_frontend_modules_js')!;
          head.removeChild(script);
          this.registerScript(item, res, `${item.modulesName}.js`, 'modules_js');
        }

        // Adding stylesheet
        if (!document.getElementById('micro_frontend_css')) {
          this.registerStyle(item, res);
        } else {
          const script = document.getElementById('micro_frontend_css')!;
          head.removeChild(script);
          this.registerStyle(item, res);
        }
      }
    );

    this.subs.push(sub);
  }

  public registerScript(item: any, res: any, key: string, id: string) {
    const script = document.createElement('script');
    script.setAttribute('src', `${item.src}/${res[key]}`);
    script.setAttribute('id', `micro_frontend_${id}`);
    document.head.appendChild(script);
  }

  public registerStyle(item: any, res: any) {
    const link = document.createElement('link');
    link.setAttribute('href', `${item.src}/${res['styles.css']}`);
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('id', 'micro_frontend_css');
    document.head.appendChild(link);
  }
}
