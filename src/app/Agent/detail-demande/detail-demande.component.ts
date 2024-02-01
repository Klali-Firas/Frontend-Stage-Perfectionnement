import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Demande } from 'src/app/Interfaces/demande';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {
  id!: number;
  demande!: Demande;
  constructor(private demandeService: DemandeService, private aRoute: ActivatedRoute, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) { }
  demandeForm!: FormGroup;
  user: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  async ngOnInit(): Promise<void> {
    this.aRoute.params.subscribe(async params => {
      this.id = params['id'];

    });
    await this.getDemandeById();
    this.demandeForm = this.formBuilder.group({
      date_demande: [formatDate(this.demande.date_demande, 'yyyy-MM-dd', 'en'), [Validators.required]],
      annee_demande: [this.demande.annee_demande, [Validators.required]],
      type_demande: [this.demande.type_demande, [Validators.required]],
      num_demande: [this.demande.num_demande, [Validators.required]],
      objet: [this.demande.objet, [Validators.required]],
      date_deliberation: [formatDate(this.demande.date_deliberation, 'yyyy-MM-dd', 'en'), [Validators.required]],
      nature_demande: [this.demande.nature_demande, [Validators.required]],
      signature: [this.demande.signature, [Validators.required]],
      date_signature: [formatDate(this.demande.date_signature, 'yyyy-MM-dd', 'en'), [Validators.required]],
      text: [this.demande.text, [Validators.required]]
    });
    console.log(this.demande && !(this.demande.statut?.id_statut == 3 || this.demande.statut?.id_statut == 4))
    if (this.demande && !(this.demande.statut?.id_statut == 3 || this.demande.statut?.id_statut == 4)) {

      this.demandeForm.disable();
    }
  }
  async getDemandeById() {
    try {
      this.demande = await firstValueFrom(this.demandeService.getDemandeById(this.id));
    } catch (error) {
      console.error('Error retrieving demande by ID:', error);
    }
  }

  RenvoyerDemande() {
    if (this.demandeForm.invalid) {
      this.demandeForm.markAllAsTouched();
      this.toastr.error('Veuillez remplir tous les champs');
      return;
    }
    if (!this.demandeForm.dirty) {
      this.toastr.error('Veuillez courriger les champs');
      return;
    }
    this.demande.text = this.demandeForm.value.text;

    this.demande.statut!.id_statut = this.demande.statut!.id_statut == 3 ? 1 : 2;
    this.demande.objet = this.demandeForm.value.objet;
    this.demande.remarque = "Corriger les champs par l'agent";


    console.log(this.demande)
    this.demandeService.updateDemande(this.id, { demande: this.demande, validateur: this.user.id! }).subscribe({
      next: data => {
        console.log(data);
        this.toastr.success("Demande renvoyée avec succès");
        this.router.navigate(['/agent/mes_demandes']);
      },
      error: (err) => {
        if (err.status == 500) {
          this.toastr.error("Erreur lors de l'envoi de la demande");
        }
        else {
          this.toastr.error(err.error.message);
        }
      },

    });
  }
  AnnulerDemande() {

    this.demandeService.annulerDemande(this.id).subscribe({
      next: data => {
        this.toastr.success("Demande annulée avec succès");
        this.router.navigate(['/agent/mes_demandes']);
      },
      error: (err) => {
        console.log(err)
        if (err.status == 500) {
          this.toastr.error("Erreur lors de l'annulation de la demande");
        }
        else {
          this.toastr.error(err.error.message);
        }
      },

    });
  }
}
