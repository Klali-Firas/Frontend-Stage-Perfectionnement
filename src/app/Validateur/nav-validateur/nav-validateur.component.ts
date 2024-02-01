import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';

@Component({
  selector: 'app-nav-validateur',
  templateUrl: './nav-validateur.component.html',
  styleUrls: ['./nav-validateur.component.css']
})
export class NavValidateurComponent {
  constructor(private router: Router) { }
  utilisateur: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  nomPrenom: String = "";
  commune: String = "";
  ngOnInit(): void {
    this.nomPrenom = this.utilisateur?.nom + " " + this.utilisateur.prenom;
    this.commune = this.utilisateur?.commune.nom;
  }

  seDeconneter() {
    localStorage.removeItem('user');
    this.router.navigate([""]);
  }
  navigateToAcceuil() {
    this.router.navigate(["validateur"]);
  }

}
