import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from '../Interfaces/demande';
import { Observable } from 'rxjs';
import { TraceDemande } from '../Interfaces/trace-demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:4332/api/demandes';

  createDemande(demande: any) {
    return this.http.post(this.apiUrl, demande);
  }
  getDemandesByAgent(id_agent: any): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.apiUrl + "/agent/" + id_agent);
  }
  getDemandesByCommune(id_commune: number): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.apiUrl + "/commune/" + id_commune);
  }

  getDemandeById(id: number): Observable<Demande> {
    return this.http.get<Demande>(this.apiUrl + "/" + id);
  }

  updateDemande(id: number, body: { demande: Demande, validateur: number }) {
    return this.http.post(`${this.apiUrl}/${id}`, body);
  }

  annulerDemande(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}/annuler`);
  }

  getAllDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.apiUrl);
  }
  getTraceDemande(id: number): Observable<TraceDemande[]> {
    return this.http.get<TraceDemande[]>("http://localhost:4332/api/trace/" + id);
  }
}
