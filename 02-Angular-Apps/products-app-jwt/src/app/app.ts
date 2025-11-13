import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { Token } from './services/token';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('products-app');
  isLoggedIn: boolean = false

  constructor(private auth: Auth, private token: Token, private router: Router){
    token.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value
    })
  }

  handleLogout(){
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
