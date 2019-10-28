import { Pipe, PipeTransform } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'videoCount'
})
export class VideoCountPipe implements PipeTransform {

  constructor(private videoService: VideoService) {}

  transform(value: string): Observable<number> {
    let count = this.videoService.get(value);
    return this.getMultiValueObservable();
  }

  getMultiValueObservable() {
    return new Observable<number>(observer => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count++);
        console.log('interval fired');
      }, 1000);
  
      return () => {
        clearInterval(interval);
      }
    });
  }

}
