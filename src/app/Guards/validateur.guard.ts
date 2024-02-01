import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Utilisateur } from '../Interfaces/utilisateur';

export const validateurGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  if (user != null && user.profile == "validateur" && user.commune.num != 0) { return true; }
  router.navigate([""]);

  return false
};
