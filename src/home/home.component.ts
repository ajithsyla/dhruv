import { Component } from '@angular/core';
import { PostService } from '../app/post.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-content',
  templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
})
// tslint:disable-next-line:component-class-suffix
// tslint:disable-next-line:one-line
// tslint:disable-next-line:class-name
export class homeComponent {
  
  somepropertys:object;
  title:string;
  name:string;
  email:string;
  address: address;
  hobbies:string[];
  showHobbies: boolean;
  newStuff:string;
  posts:Post[];

  constructor(private postService:PostService){
      this.title='Syla Profile';
      this.name='Ajith Paul Syla',
      this.email='ajith.syla@gmail.com',
      this.address = {
                street:'Ho No 596 G/F, SPR HILLS Yousufguda',
                city:'Hyderabad',
                state:'Telangana'
              }
      this.hobbies = ['I love listing Music', 'I love watching Movies', 'I love to play Sports'];
      this.showHobbies = false;
      
      this.postService.getPosts().subscribe(posts=>{
         this.posts= posts;
       });
    }
 ngOnInit() {
      //this.newStuff = "";
       this.somepropertys = this.postService.car;
  }
   toggleHobbies(){
     if(this.showHobbies == false){
       this.showHobbies = true;
     }else{
       this.showHobbies = false;
     } 
   }
  
   addHobby(hobby){
     this.hobbies.push(hobby);
     this.newStuff = "";
   }

   deletHobby(index){
     this.hobbies.splice(index,1) 
    }
 
}

interface address{
    street:string;
    city:string;
    state:string;
}


interface Post{
    id:number;
    title:string;
    body:string;
}