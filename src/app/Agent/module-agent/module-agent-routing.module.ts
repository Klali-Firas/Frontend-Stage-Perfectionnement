import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellAgentComponent } from '../shell-agent/shell-agent.component';
import { CreerDemandeComponent } from '../creer-demande/creer-demande.component';
import { MesDemandesComponent } from '../mes-demandes/mes-demandes.component';
import { DetailDemandeComponent } from '../detail-demande/detail-demande.component';

const routes: Routes = [{
  path: '', component: ShellAgentComponent, children: [
    { path: "", component: CreerDemandeComponent },
    { path: "mes_demandes", component: MesDemandesComponent },
    { path: "mes_demandes/:id", component: DetailDemandeComponent },]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAgentRoutingModule { }
