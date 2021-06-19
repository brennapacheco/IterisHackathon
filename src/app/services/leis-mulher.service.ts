import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeisMulherModel } from './leis-mulher-model';

@Injectable({
  providedIn: 'root'
})
export class LeisMulherService {

  leisMulherUrl: string = 'https://it3-klj-default-rtdb.firebaseio.com/leisMulheres.json';

  constructor(private http: HttpClient) { }

  public get(): Observable<LeisMulherModel[]>{
    return this.http.get<LeisMulherModel[]>(this.leisMulherUrl);
  }
}
