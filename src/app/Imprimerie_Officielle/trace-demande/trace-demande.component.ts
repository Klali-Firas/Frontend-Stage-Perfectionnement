import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TraceDemande } from 'src/app/Interfaces/trace-demande';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-trace-demande',
  templateUrl: './trace-demande.component.html',
  styleUrls: ['./trace-demande.component.css']
})
export class TraceDemandeComponent implements OnInit {
  id!: number;
  trace_demande!: TraceDemande[];
  constructor(private aroute: ActivatedRoute, private demandeService: DemandeService,) { }


  ngOnInit(): void {
    this.aroute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getTraceDemande();
  }

  getTraceDemande() {
    this.demandeService.getTraceDemande(this.id).subscribe({
      next: (res) => {
        console.log(res);
        this.trace_demande = res;
      }, error: (err) => {
        console.error(err);
      },
    });
  }

}
