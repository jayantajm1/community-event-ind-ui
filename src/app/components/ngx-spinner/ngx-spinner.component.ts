import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-spinner',
  template: `
    <div class="ngx-spinner" [style.background]="bdColor" *ngIf="showSpinner">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .ngx-spinner {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
    `,
  ],
})
export class NgxSpinnerShimComponent {
  @Input() bdColor = '#ffffff';
  @Input() showSpinner = false;
}
