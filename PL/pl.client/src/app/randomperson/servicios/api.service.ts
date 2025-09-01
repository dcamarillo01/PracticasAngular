import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , map } from 'rxjs';
import { RandomPerson} from '../../randomperson/Modelos/randomperson';
import { RandomPersonResponse } from '../../randomperson/Modelos/randompersonresponse';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private randomPerson : RandomPerson = {
    gender: '', 
    name: { title: '', first: '', last: ''},
    location: { street : { name:'', number:0}, city:''},
    email: '', phone: '', cell: '', 
    picture: {large: '', medium: '', thumbnail: ''}
    };

    private randomPersonResponse : RandomPersonResponse = {

      results : [this.randomPerson],
      info: {
        seed: '',
        results: 0,
        page: 0,
        version: ''
      }
    }

  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  public getRandomPerson() : Observable<RandomPerson>{

    return this.http.get<RandomPersonResponse>(this.apiUrl)
    //map convierte el observable de randomresponse to randomperson. 
    .pipe(map(randomResponse => randomResponse.results[0]));
  }



}
