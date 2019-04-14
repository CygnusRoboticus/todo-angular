import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-stacker',
  templateUrl: './stacker.component.html',
  styleUrls: ['./stacker.component.scss']
})
export class StackerComponent implements OnInit {
  @Input()
  @HostBinding('class.horizontal')
  horizontal = false;

  @HostBinding('class.vertical')
  get vertical() { return !this.horizontal; }

  constructor() { }

  ngOnInit() {
  }

}
