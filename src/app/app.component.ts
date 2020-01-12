import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModelWindowComponent} from './model-window/model-window.component';
import {RefDirective} from './ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective, {static: false, 'static:false'} ) refDir: RefDirective
  constructor(private resolver: ComponentFactoryResolver ) {}

  showWindow() {
    this.resolver.resolveComponentFactory(ModelWindowComponent);
  }
}

