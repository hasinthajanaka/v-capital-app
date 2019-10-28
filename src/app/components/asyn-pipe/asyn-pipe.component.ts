import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-asyn-pipe',
  templateUrl: './asyn-pipe.component.html',
  styleUrls: ['./asyn-pipe.component.css']
})
export class AsynPipeComponent implements OnInit {

  @Input() userId: string;

  videoCount;
  show = false;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoCount = this.getVideoCount();
  }

  getVideoCount() {
    console.log(this.userId);
    this.videoService.get(this.userId).subscribe(result => {
      this.show = true;
      this.videoCount = result;
    })
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
