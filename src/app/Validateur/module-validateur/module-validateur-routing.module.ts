import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellValidateurComponent } from '../shell-validateur/shell-validateur.component';
import { DemandesAValiderComponent } from '../demandes-avalider/demandes-avalider.component';
import { ValiderDemandeComponent } from '../valider-demande/valider-demande.component';


const routes: Routes = [
  {
    path: '', component: ShellValidateurComponent, children: [
      { path: "", component: DemandesAValiderComponent },
      { path: ":id", component: ValiderDemandeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleValidateurRoutingModule { }
