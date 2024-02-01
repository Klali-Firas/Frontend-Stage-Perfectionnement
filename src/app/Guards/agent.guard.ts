import { CanActivateFn, Router } from '@angular/router';
import { Utilisateur } from '../Interfaces/utilisateur';
import { inject } from '@angular/core';

export const agentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  if (user != null && user.profile == "agent") { return true; }
  router.navigate([""]);

  return false
};
