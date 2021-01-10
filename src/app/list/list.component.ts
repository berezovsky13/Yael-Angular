import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data:any
  constructor(private user:UserService) { }

  ngOnInit() {
    this.user.getData().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }
}
