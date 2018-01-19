import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
    <div class="like">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
