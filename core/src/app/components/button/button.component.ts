import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() color: string = '';
  constructor() {}
  onClick(name: string = 'Random'): void {
    console.log(`Hello ${name}`);
  }
  ngOnInit(): void {}
}
