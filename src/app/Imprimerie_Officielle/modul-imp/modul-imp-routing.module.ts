import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellImpComponent } from '../shell-imp/shell-imp.component';
import { DeamandesAPublierComponent } from '../deamandes-apublier/deamandes-apublier.component';
import { PublierDemandeComponent } from '../publier-demande/publier-demande.component';
import { ListeTousDemandesComponent } from '../liste-tous-demandes/liste-tous-demandes.component';
import { TraceDemandeComponent } from '../trace-demande/trace-demande.component';

const routes: Routes = [
  {
    path: "", component: ShellImpComponent, children: [
      { path: "", component: DeamandesAPublierComponent },
      { path: "publier_demande/:id", component: PublierDemandeComponent },
      { path: "demandes", component: ListeTousDemandesComponent },
      { path: "trace_demande/:id", component: TraceDemandeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulImpRoutingModule { }
