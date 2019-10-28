import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'v-capital-app';
  firstName;
  lastName;

  users;
  pages = [];

  page = 4;

  show = false;

  constructor(private userService: UserService, private videoService: VideoService){};

  ngOnInit() {
    this.getData(1);
  }

  getData(index) {
    this.userService.get(index).subscribe(res =>{
      this.users = res;
      if(index == 1) {
        this.pages = this.totalpages(this.users.totalPages);
        this.show = true;
      }
      console.log(this.pages);
    })
  }

  totalpages(count: Number) {
    var pages = [];
    for (let i = 1; i <= count; i++) {
      pages.push(i);
    }
    return pages;
  }
}
