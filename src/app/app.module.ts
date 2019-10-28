import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoCountPipe } from './pipes/video-count.pipe';
import { AsynPipeComponent } from './components/asyn-pipe/asyn-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoCountPipe,
    AsynPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
