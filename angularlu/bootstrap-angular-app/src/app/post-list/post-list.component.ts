import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { postInterface } from '../postInterface';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
 export class PostListComponent implements OnInit {
  post!:any;
  weather!:any
  lat:any;
  lng:any;
  
constructor(private postService: PostService) { }
  ngOnInit(): void {
    // const res = this.postService.getLocation();
    // res.subscribe(res=>{
    //   this.weather = res;
    //   console.log(res)
    //   this.getUserLocation()
    // });
    this.getUserLocation()
    }
    getUserLocation() {
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
           this.lat = position.coords.latitude;
           this.lng = position.coords.longitude;
           console.log(this.lat, this.lng);
         });
   }else {
      console.log("User not allow")
    }
    // this.postService.getPosition().then((position:any)=>
    // { 
    // const res = this.postService.getWeather(position.coords.latitude, 
    //   position.coords.longitude);

    //   })
    //   .catch((err:any)=> console.log(err.message));
    
  


}
 }
  



  
//   viewPost(id:number){
//     console.log(id);
//   }

