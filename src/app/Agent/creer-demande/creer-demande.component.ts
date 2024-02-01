import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeService } from 'src/app/Services/demande.service';
import { Demande } from 'src/app/Interfaces/demande';
import { Utilisateur } from 'src/app/Interfaces/utilisateur';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creer-demande',
  templateUrl: './creer-demande.component.html',
  styleUrls: ['./creer-demande.component.css']
})

export class CreerDemandeComponent implements OnInit {
  demandeForm: FormGroup = new FormGroup({});
  user: Utilisateur = JSON.parse(localStorage.getItem('user')!);

  constructor(private formBuilder: FormBuilder, private demandeService: DemandeService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.demandeForm = this.formBuilder.group({
      date_demande: [{ value: formatDate(new Date(), "yyyy-MM-dd", "en"), disabled: true }, [Validators.required]],
      annee_demande: ['', [Validators.required]],
      type_demande: ['', [Validators.required]],
      num_demande: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      date_deliberation: ['', [Validators.required]],
      nature_demande: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      date_signature: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });

    // this.demandeForm.valueChanges.subscribe(console.log);
  }
  createDemande() {
    if (this.demandeForm.invalid) {
      this.demandeForm.markAllAsTouched();
      return;
    }
    this.demandeForm.enable();
    var demande: Demande = this.demandeForm.value;
    demande.id_agent = this.user.id!;
    console.log(demande)
    this.demandeService.createDemande(demande).subscribe({
      next: (res) => {
        console.log(res)
        this.demandeForm.reset();
        this.toastr.success("demande créée avec succès", "Succés");
        this.router.navigate(['/agent/mes_demandes']);
      }, error: (err) => {
        console.error(err);
        if (err.status != 500)
          this.toastr.error(err.error.message, "Error");
        else this.toastr.error("Error Server", "Error");
      },
    });
  }

}


