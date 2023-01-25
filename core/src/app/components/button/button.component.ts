import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  //Component inputs..
  @Input() title: string = '';
  @Input() color: string = '';
  //Emitters
  @Output() click = new EventEmitter();
  constructor() {}
  onClick(): void {
    this.click.emit();
  }
  ngOnInit(): void {}
}
