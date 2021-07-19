export class Validation {
    constructor() {
        this.fname = false;
        this.lname = false;
        this.email = false;
        this.password = false;
        this.CList = false;
        this.Gender = false;
        this.teamList = false;
        this.ans = false;
    }
    status() {
        if (this.fname && this.lname && this.email && this.password && this.Gender && this.CList && this.teamList && this.ans) {
            //if(this.fname&&this.lname&&this.email&&this.password&&this.Gender){
            return true;
        }
        else {
            return false;
        }
    }
    myReset() {
        this.fname = false;
        this.lname = false;
        this.email = false;
        this.password = false;
        this.CList = false;
        this.Gender = false;
        this.teamList = false;
        this.ans = false;
    }
}
