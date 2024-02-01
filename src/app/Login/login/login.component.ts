import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilisateursService } from 'src/app/Services/utilisateurs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private utilisateursService: UtilisateursService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.utilisateursService.login(this.loginForm.controls["login"].value, this.loginForm.controls["password"].value).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        this.toastr.success('Bonjour ' + data.nom + " " + data.prenom, 'Bonjour !');
        if (data.profile == "agent")
          this.router.navigate(["/agent"]);
        else if (data.profile == "validateur" && data.commune.num != 0)
          this.router.navigate(["/validateur"]);
        else this.router.navigate(["/imprimerie_officielle"]);
      },
      error: (err) => {
        console.error(err);
        if (err.status != 500)
          this.toastr.error(err.error.message, "Error");
        else this.toastr.error("Error Server", "Error");
      }
    }

    );
  }
}



