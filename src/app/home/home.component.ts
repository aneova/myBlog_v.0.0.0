import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {
  }
  goToHomePage() {
    this.router.navigate(['/posts']);
  }

    goToDoPage() {
      this.router.navigate(['/todos']);
    }
}
