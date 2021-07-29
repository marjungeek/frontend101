import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  //index:number=NaN;
 // @Output() count: EventEmitter<any> = new EventEmitter();

  team!: any[];
  parsedTeam:any;
  myStatus:boolean=false;
  Like={
    name:'Like',num: 0
  };

  constructor(private router: Router,private route: ActivatedRoute,private APIService: APIService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    //console.log('in post init id: ',id);
    this.myStatus=this.APIService.teamRecord(id);
    console.log('MyStatus: ',this.myStatus)
    if(this.myStatus){
      this.Like.name='like';
      this.Like.num=0;
    }else{
      this.Like.name='dis-like';
      this.Like.num=1;

    }

    this.APIService.getList().subscribe(result => {
      this.team =result.data;
      //console.log(result);
      //console.log(result.data);

      const index = this.team.findIndex(x => x.id ===id);
      console.log(typeof(index),index);
      if(index==-1){
        this.router.navigate(['**']);
      }
      this.parsedTeam=this.team[index];
      //console.log('parse team is:\n',this.parsedTeam);

    });
    // res.subscribe((event)=>{
    //   if(id != null){
    //     this.team=event[parseInt(id)];
    //   }else{
    //     console.log('id is null');
    //   }

    // });

  }
  likeMe(){
    if(this.Like.num==0){
      this.Like.num=1;
      this.Like.name='dis-Like'
      //this.count.emit(true);
      this.APIService.likeNum(true,this.parsedTeam.id);
    }else{
      this.Like.num=0;
      this.Like.name='Like'
      //this.count.emit(true);
      this.APIService.likeNum(false,this.parsedTeam.id);
    }
  }

}
