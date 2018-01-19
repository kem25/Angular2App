import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    LikeComponent
  ],
  declarations: [LikeComponent]
})
export class FirstModule { }
