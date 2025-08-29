import { Component , OnInit} from '@angular/core';
import { RandomPerson} from '../../Modelos/randomperson';
import { ApiService } from '../../servicios/api.service';
import { RandomPersonResponse } from '../../Modelos/randompersonresponse';



@Component({
  selector: 'app-randomperson',
  standalone: false,
  templateUrl: './randomperson.component.html',
  styleUrl: './randomperson.component.css',
})
export class RandompersonComponent implements OnInit {

   public randomPerson : RandomPerson = {
    gender: '', 
    name: { title: '', first: '', last: ''},
    location: { street : { name:'', number:0}, city:''},
    email: '', phone: '', cell: '', 
    picture: {large: '', medium: '', thumbnail: ''}
    };

     public randomPersonResponse : RandomPersonResponse = {
    
          results : [this.randomPerson],
          info: {
            seed: '',
            results: 0,
            page: 0,
            version: ''
          }
        }

  constructor (private apiservice:ApiService){

  }

  ngOnInit(){

    this.apiservice.getRandomPerson().subscribe(randomPersonResponse => this.randomPerson = randomPersonResponse);
    console.log(this.randomPersonResponse)
  }

}
