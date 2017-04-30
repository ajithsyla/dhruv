import { Injectable } from '@angular/core';
import{ Http } from '@angular/http';
import 'rxjs/RX'

@Injectable()
export class PostService {
  constructor(private http:Http) {
      
   }
   car = ['maruthi','swift','ciaz'];

  //  myData(){
  //    return 'this is my data';
  //  }

  getPosts(){
    //https://jsonplaceholder.typicode.com/ dummy restApi
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }

}
