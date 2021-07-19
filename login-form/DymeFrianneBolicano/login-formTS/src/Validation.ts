export class Validation{
    fname:boolean;
    lname:boolean;
    email:boolean;
    password:boolean;
    CList:boolean;
    Gender:boolean;
    teamList:boolean;
    ans:boolean;


    constructor(){
        this.fname=false;
        this.lname=false;
        this.email=false;
        this.password=false;
        this.CList=false;
        this.Gender=false;
        this.teamList=false;
        this.ans=false;
    }
  
    status():boolean{
      if(this.fname&&this.lname&&this.email&&this.password&&this.Gender&&this.CList&&this.teamList&&this.ans){
      //if(this.fname&&this.lname&&this.email&&this.password&&this.Gender){
        return true;
      }
      else{
        return false;
      }
    }
    myReset():void{
      this.fname=false;
      this.lname=false;
      this.email=false;
      this.password=false;
      this.CList=false;
      this.Gender=false;
      this.teamList=false;
      this.ans=false;
    }
  }