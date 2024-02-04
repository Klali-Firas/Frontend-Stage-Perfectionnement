import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Demande } from 'src/app/Interfaces/demande';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-liste-tous-demandes',
  templateUrl: './liste-tous-demandes.component.html',
  styleUrls: ['./liste-tous-demandes.component.css']
})
export class ListeTousDemandesComponent implements OnInit {
  user: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  demandes: Demande[] = [];

  constructor(private demandeService: DemandeService, private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
    this.getDemandes();
  }

  getDemandes() {
    this.demandeService.getAllDemandes().subscribe({
      next: (res) => {
        this.demandes = res;
      }, error: (err) => {
        console.error(err);
        if (err.status != 500)
          this.toastr.error(err.error.message, "Error");
        else this.toastr.error("Error Server", "Error");
      },
    });
  }

  navigateToDemande(id: number) {
    this.router.navigate(['/imprimerie_officielle/trace_demande/', id]);
  }
}