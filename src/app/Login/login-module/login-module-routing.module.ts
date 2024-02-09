import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellLoginComponent } from '../shell-login/shell-login.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: "", component: ShellLoginComponent, children: [
      { path: "", component: LoginComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }
