import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ListMusicService} from '../shared/list-music.service';
import {fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'app-pleer',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {
  state = false;
  files: Array<any> = [];
  currentFile: string = this.listMusic.files[0].artist;
  currentId = 0;
  currentValue: number;
  backgroundToggle = true;

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;
  constructor(public listMusic: ListMusicService) { }

  musicFiles: [] = this.listMusic.files;

  ngOnInit() {
  }

  OnPlay(id: number) {
    this.listMusic.onplay(id);
    this.currentFile  = this.listMusic.getTrackName(id);
    this.currentId = id;
    this.state = true;
  }

  OnStop(id: number) {
    this.listMusic.onstop(id);
  }

  OnPause(id: number) {
    this.listMusic.onpause(id);
    this.state = false;
  }

  getLenght(): number {
    this.currentValue = this.listMusic.getlenght();
    return  this.currentValue;
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

  getPosition() {
    // fromEvent(document.body, 'mousemove').subscribe( e => {
    //   console.log(e.pageX, e.pageY);
    // });
  }

}
