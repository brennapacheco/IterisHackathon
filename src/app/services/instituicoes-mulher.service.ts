import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituicoesMulherModel } from './instituicoes-mulher-model';

@Injectable({
  providedIn: 'root'
})
export class InstituicoesMulherService {

  instituicoesMulherUrl: string = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';

  constructor(private http: HttpClient) { }

  public get(): Observable<InstituicoesMulherModel[]>{
    return this.http.get<InstituicoesMulherModel[]>(this.instituicoesMulherUrl);
  }
}
