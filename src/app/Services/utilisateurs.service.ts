import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Utilisateur } from '../Interfaces/utilisateur';
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http: HttpClient) { }

  private final = 'http://localhost:4332/api/utilisateurs';

  getUtilisateurs() {
    return this.http.get(this.final);
  }
  login(email: string, password: string): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.final + '/login', { login: email, mdp: password });
  }
  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.final + '/' + id);
  }
}
