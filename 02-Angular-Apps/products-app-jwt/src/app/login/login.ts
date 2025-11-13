import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Token } from '../services/token';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage: string =''

  constructor(private auth: Auth, private token: Token, private router: Router){
    token.isLoggedIn.subscribe(value => {
      if(value){
        router.navigate(['/products'])
      }
    })
  }

  handleSubmit(data: NgForm){
    const user: User = data.value;
    this.auth.login(user).subscribe({
      next: (response) => {
        if(response && response.token){
          this.router.navigate(['/products'])
        }
      },
      error: (error)=>{
        console.log(error)
        this.errorMessage = "Invalid username or password"
      }
    })
  }
}
