import { Injectable } from '@angular/core';

const config = [
  {
    src: 'a/main.js',
    element: 'content-a',
    route: '/content-a'
  },
  {
    src: 'b/main.js',
    element: 'content-b',
    route: '/module-a'
  },
  {
    src: 'b/main.js',
    element: 'content-b',
    route: '/module-b'
  },
]

@Injectable({
  providedIn: 'root'
})
export class MicrofrontendService {
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
    const content = document.getElementById('content')!;

    if (content.hasChildNodes()) {
      if (content.firstChild) {
        content.removeChild(content.firstChild);
      }
    }

    const element = document.createElement(item.element);
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
}