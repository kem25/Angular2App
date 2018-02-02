import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  
  @Input()
  CandidateName:string='none';

  @Input()
  CssClass:string='pink';

  @Output()
  boxClicked: EventEmitter<string> =  new EventEmitter<string>();

  handleClick(){
    this.boxClicked.emit(this.CandidateName);
  }
  constructor() { }

  ngOnInit() {
  }

}
