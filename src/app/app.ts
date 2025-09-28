import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
//import { PesquisaCreditosComponent } from './pesquisa-creditos-component/pesquisa-creditos-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
//  imports: [RouterOutlet, RouterModule, PesquisaCreditosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('frontend-angular');
}
