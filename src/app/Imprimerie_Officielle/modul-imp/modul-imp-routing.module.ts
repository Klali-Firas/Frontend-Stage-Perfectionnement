import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellImpComponent } from '../shell-imp/shell-imp.component';
import { DeamandesAPublierComponent } from '../deamandes-apublier/deamandes-apublier.component';
import { PublierDemandeComponent } from '../publier-demande/publier-demande.component';

const routes: Routes = [
  {
    path: "", component: ShellImpComponent, children: [
      { path: "", component: DeamandesAPublierComponent },
      { path: ":id", component: PublierDemandeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulImpRoutingModule { }
