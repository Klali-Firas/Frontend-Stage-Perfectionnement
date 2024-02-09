import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShellAgentComponent } from './Agent/shell-agent/shell-agent.component';
import { NavAgentComponent } from './Agent/nav-agent/nav-agent.component';
import { CreerDemandeComponent } from './Agent/creer-demande/creer-demande.component';
import { MesDemandesComponent } from './Agent/mes-demandes/mes-demandes.component';
import { ShellValidateurComponent } from './Validateur/shell-validateur/shell-validateur.component';
import { DemandesAValiderComponent } from './Validateur/demandes-avalider/demandes-avalider.component';
import { NavValidateurComponent } from './Validateur/nav-validateur/nav-validateur.component';
import { ValiderDemandeComponent } from './Validateur/valider-demande/valider-demande.component';
import { DatePipe } from '@angular/common';
import { DetailDemandeComponent } from './Agent/detail-demande/detail-demande.component';
import { ShellImpComponent } from './Imprimerie_Officielle/shell-imp/shell-imp.component';
import { NavImpComponent } from './Imprimerie_Officielle/nav-imp/nav-imp.component';
import { DeamandesAPublierComponent } from './Imprimerie_Officielle/deamandes-apublier/deamandes-apublier.component';
import { PublierDemandeComponent } from './Imprimerie_Officielle/publier-demande/publier-demande.component';
import { ListeTousDemandesComponent } from './Imprimerie_Officielle/liste-tous-demandes/liste-tous-demandes.component';
import { TraceDemandeComponent } from './Imprimerie_Officielle/trace-demande/trace-demande.component';
import { ShellLoginComponent } from './Login/shell-login/shell-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShellAgentComponent,
    NavAgentComponent,
    CreerDemandeComponent,
    MesDemandesComponent,
    ShellValidateurComponent,
    DemandesAValiderComponent,
    NavValidateurComponent,
    ValiderDemandeComponent,
    DetailDemandeComponent,
    ShellImpComponent,
    NavImpComponent,
    DeamandesAPublierComponent,
    PublierDemandeComponent,
    ListeTousDemandesComponent,
    TraceDemandeComponent,
    ShellLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    HttpClientModule,
    ToastrModule.forRoot(
      { progressBar: true, timeOut: 3000, positionClass: "toast-bottom-right" }
    ),
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
