import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Demande } from 'src/app/Interfaces/demande';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-valider-demande',
  templateUrl: './valider-demande.component.html',
  styleUrls: ['./valider-demande.component.css']
})
export class ValiderDemandeComponent implements OnInit {
  id!: number;
  demande!: Demande;
  demandeForm!: FormGroup;

  constructor(private aroute: ActivatedRoute, private demandeService: DemandeService, private formBuilder: FormBuilder, private toaster: ToastrService, private router: Router) { }
  user: Utilisateur = JSON.parse(localStorage.getItem('user')!);
  async ngOnInit(): Promise<void> {
    this.aroute.params.subscribe(async params => {
      this.id = params['id'];
      await this.getDemandeById();
      this.demandeForm = this.formBuilder.group({
        date_demande: [{ value: formatDate(this.demande.date_demande, 'yyyy-MM-dd', 'en'), disabled: true }, [Validators.required]],
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
    });



  }

  async getDemandeById() {
    try {
      this.demande = await firstValueFrom(this.demandeService.getDemandeById(this.id));
    } catch (error) {
      console.error('Error retrieving demande by ID:', error);
    }
  }

  AccepterDemande() {
    if (this.demandeForm.invalid) {
      this.demandeForm.markAllAsTouched();
      this.toaster.error("Veuillez saisir tous les champs");
      return;
    }
    this.demandeForm.enable();
    this.demande.text = this.demandeForm.value.text;
    this.demande.statut!.id_statut = 2;
    this.demande.objet = this.demandeForm.value.objet;
    this.demande.remarque = "Accepter";

    this.demandeService.updateDemande(this.id, { demande: this.demande, validateur: this.user.id! }).subscribe({
      next: data => {
        console.log(data);
        this.toaster.success("Demande accepter avec succes");
        this.router.navigate(['/validateur']);
      },
      error: (err) => {
        if (err.status == 500) {
          this.toaster.error("Erreur lors de l'acceptation de la demande");
        }
        else {
          this.toaster.error(err.error.message);
        }
      },

    });
  }
  ARectifierDemande(remarque: string) {
    if (this.demandeForm.invalid) {
      this.demandeForm.markAllAsTouched();
      this.toaster.error("Veuillez saisir tous les champs");
      return;
    }
    if (remarque.trim() == "") {
      this.toaster.error("Veuillez saisir une remarque");
      return;
    }
    this.demandeForm.enable();
    this.demande.text = this.demandeForm.value.text;
    this.demande.statut!.id_statut = 3;
    this.demande.objet = this.demandeForm.value.objet;
    this.demande.remarque = remarque;

    this.demandeService.updateDemande(this.id, { demande: this.demande, validateur: this.user.id! }).subscribe({
      next: data => {
        console.log(data);
        this.toaster.success("Demande a rectifier avec succes");
        this.router.navigate(['/validateur']);
      },
      error: (err) => {
        if (err.status == 500) {
          this.toaster.error("Erreur lors de la rectification de la demande");
        }
        else {
          this.toaster.error(err.error.message);
        }
      },
    });
  }

}