import { Component } from '@angular/core';

@Component({
  selector: 'p-toast',
  template: `<div class="p-toast"><ng-content></ng-content></div>`,
  styles: [
    `
      .p-toast {
        position: fixed;
        top: 12px;
        right: 12px;
        z-index: 10000;
      }
    `,
  ],
})
export class PToastShimComponent {}
