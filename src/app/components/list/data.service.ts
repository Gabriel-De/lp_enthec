import { Injectable } from '@angular/core';
import { CharacterI } from '../../models/list.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http' 


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'https://futuramaapi.herokuapp.com/api/quotes';
  
  constructor(private http: HttpClient) { }

  getAllCharacter():Observable<CharacterI[]>{
    return this.http.get<CharacterI[]>(this.urlApi);
  }

}
