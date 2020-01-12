import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-model-window',
  templateUrl: './model-window.component.html',
  styleUrls: ['./model-window.component.scss']
})
export class ModelWindowComponent implements OnInit {

  @Input() title = 'TEXT';
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
