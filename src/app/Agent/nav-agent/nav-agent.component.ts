import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';

@Component({
  selector: 'app-nav-agent',
  templateUrl: './nav-agent.component.html',
  styleUrls: ['./nav-agent.component.css']
})
export class NavAgentComponent implements OnInit {

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

  navigateToMesDemandes() {
    this.router.navigate(["agent/mes_demandes"]);
  }
  navigateToAccueil() {
    this.router.navigate(["agent"]);
  }
}
