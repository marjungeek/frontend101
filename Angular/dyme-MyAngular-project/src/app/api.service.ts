import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { from, Observable, pipe, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private message$ = new BehaviorSubject<string>("Default Message");
  // messageData = this.message$.asObservable();

  private listOfTeams$ =new BehaviorSubject<any>('');
  lisOfTeams = this.listOfTeams$.asObservable();

  constructor() { }

  // updateMessage(newMessage: string){
  //   this.message$.next(newMessage);
  // }

  getAPI(URL:string){
    //data observable
    const data$ = ajax(URL).pipe(
      map((res: any) => {
        if(!res.response.data){
          console.log('why? error occurred!');
          throw new Error('Something wrong!');
        }
        //console.log(res.response.data,res);
        return res.response.data;
      }),
      retry(4), //retry up tpp 4 times before failing
      catchError(() => of([]))
    );

    const observer = {
      next: (res:any) => {
        console.log(res)
        this.listOfTeams$.next(res);
        //console.log(this.listOfTeams$)
      },
      error: (err: Error) => {
        console.log(`Error ${err}`)
      },
      complete: () => console.log('Completed')
    };

    data$.subscribe(observer);
  }
}
