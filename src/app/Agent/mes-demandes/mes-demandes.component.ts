import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/Interfaces/demande';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit {
  user: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  demandes: Demande[] = [];
  enCoursChecked: boolean = true;
  aRectifierChecked: boolean = true;
  publieChecked: boolean = false;
  autreChecked: boolean = false;
  constructor(private demandeService: DemandeService, private router: Router) { }
  ngOnInit(): void {
    this.getDemandesByAgent();
  }
  getDemandesByAgent() {
    this.demandeService.getDemandesByAgent(this.user.id).subscribe({
      next: (res) => {
        console.log(res)
        this.demandes = res;
      }, error: (err) => {
        console.error(err);
      },
    });
  }

  navigateToDemande(id: number) {
    this.router.navigate(['agent/mes_demandes', id]);
  }
}
