import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const config = [
  {
    src: 'assets/content-a/main.js',
    element: 'content-a',
    route: '/content-a'
  },
  {
    src: 'assets/content-b/main.js',
    element: 'content-b',
    route: '/content-b'
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private router: Router
  ) { }

  public navigate(url: string) {
    const item = config.find(item => item.route === url);

    if (!item) return;
    this.load(item)
  }

  public load(item: any) {
    const content = document.getElementById('content')!;

    const element = document.createElement(item.element);
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
}
