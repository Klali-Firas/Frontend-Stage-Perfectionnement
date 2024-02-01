import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';

@Component({
  selector: 'app-nav-imp',
  templateUrl: './nav-imp.component.html',
  styleUrls: ['./nav-imp.component.css']
})
export class NavImpComponent implements OnInit {
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
    this.router.navigate(["/imprimerie_officielle"]);
  }

}
