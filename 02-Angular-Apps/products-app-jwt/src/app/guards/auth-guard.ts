import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Token } from '../services/token';

export const authGuard: CanActivateFn = (route, state) => {

  const token = inject(Token)
  const router = inject(Router)

  token.isLoggedIn.subscribe(value => {
    if(!value){
      router.navigate(['/unauthorized'])
    }
  })
  return true;
};
