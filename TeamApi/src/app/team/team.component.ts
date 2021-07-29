import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { data } from '../interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  post! : data[];
  constructor(private router : Router, private route : ActivatedRoute, private ApiService : ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const result = this.ApiService.getPost(id);
    result.subscribe(data => {
      console.log(this.post);
      this.post = data;
    })
  }

  back() {
    this.router.navigate(['/teamlist']);
  }
}
