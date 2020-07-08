import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Client } from './client';
import { Opp } from './opp';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsUrl = '/api/users';
  private oppUrl = '/opp/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET clients from the backend */
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  getClientByEmail(email: string): Observable<Client> {
    return this.http.get<Client>(this.clientsUrl + '/' + email);
  }

  getOppsByEmail(email: string): Observable<Opp[]> {
    return this.http.get<Opp[]>(this.clientsUrl + this.oppUrl + email)
  }

  updateOpp(email: string, opps: Opp[]): Observable<any> {
    return this.http.put(this.clientsUrl + this.oppUrl + email, opps, this.httpOptions);
  }

}
