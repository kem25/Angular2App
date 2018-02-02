import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[BoxComponent],
  declarations: [BoxComponent]
})
export class ReusableModule { }
