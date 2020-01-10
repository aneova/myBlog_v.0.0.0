import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListMusicService {
  constructor() { }
  files: any = [
   {
      url:
        'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1685%20Purcell%20%2C%20Trumpet%20Tune%20and%20Air.mp3',
      name: 'Trumpet Tune and Air',
      artist: 'Purcell',
      id: 0
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1709%20Bach%20%2C%20Toccata%20in%20D%20minor.mp3',
      name: '1709 Bach Toccata in D minor',
      artist: 'J.S. Bach',
      id: 1
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1725%20Vivaldi%20%2C%20The%20Four%20Seasons%20-%20Spring.mp3',
      name: 'Vivaldi The four seasons. Spring.',
      artist: 'Vivaldi',
      id: 2
    }


  ];
  private audioObj = new Audio();

  getTrack() {
    return of(this.files); // get a new track from array files
  }

  onplay(id: number) {
    console.log('Name = ', id);
    // Play audio
    this.audioObj.src = this.files[id].url;
    this.audioObj.load();
    this.audioObj.play();
  }

  onpause(id: number) {
    this.audioObj.pause();
  }

  onstop(id: number) {
    this.audioObj.pause();
  }

  getTrackName(id: number): string {
    const str: string = this.files[id].artist;
    return str;
  }

  getlenght(): number {
    return this.audioObj.currentTime;
  }
}
