import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { agentGuard } from './Guards/agent.guard';
import { validateurGuard } from './Guards/validateur.guard';
import { imprimerieOfficielleGuard } from './Guards/imprimerie-officielle.guard';

const routes: Routes = [
  { path: "", loadChildren: () => import('./Login/login-module/login-module.module').then(m => m.LoginModuleModule) },
  { path: "agent", loadChildren: () => import('./Agent/module-agent/module-agent.module').then(m => m.ModuleAgentModule), canActivate: [agentGuard] },
  { path: "validateur", loadChildren: () => import('./Validateur/module-validateur/module-validateur.module').then(m => m.ModuleValidateurModule), canActivate: [validateurGuard] },
  { path: "imprimerie_officielle", loadChildren: () => import('./Imprimerie_Officielle/modul-imp/modul-imp.module').then(m => m.ModulImpModule), canActivate: [imprimerieOfficielleGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
