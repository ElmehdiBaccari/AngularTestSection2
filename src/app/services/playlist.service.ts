import { Injectable } from '@angular/core';
import { Playlist } from '../playlist/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlists: Playlist[] = [
    {  id : 1 ,
      name: 'Kopikustik',
      totalDuration: 5,
      totalSongs: 2,
      description: 'More than a coffee, this is all of your favorite accoustic songs.',
      title: 'Cigarettes of ours',
      artist: 'Ardhito Pramono',
      duration: 3
     
    },
    {  id : 2 , 
      name: 'Anime Hits',
      totalDuration: 13,
      totalSongs: 3,
      description: 'Listen to your favorite Anime songs, all in one playlist.',
      title: 'Renai Circulation',
      artist: 'Kana Hanazawa',
      duration: 4
        },
      
    
  ];



  constructor() { }


  getPlaylistsFromData(): Playlist[] {
    return this.playlists;
  }

  addPlaylists(playlist: Playlist ){
    playlist.id = this.playlists.length + 1;
    this.playlists.push(playlist);

  }
  updatePlaylists(playlist: Playlist) {
    const index = this.playlists.findIndex(u => playlist.id === u.id);
    this.playlists[index] = playlist;
  }
  deletePlaylists(playlist: Playlist) {
    this.playlists.splice(this.playlists.indexOf(playlist), 1);
  }
}
