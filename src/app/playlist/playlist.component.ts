import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists:  Playlist[] ;
  playlistsForm: boolean;
  isNewplaylists: boolean;
  newPlaylists: any = {};
  editPlaylistsForm: boolean;
  editedPlaylists: any = {};

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlists = this.getPlaylists();
  }

  getPlaylists(): Playlist[] {
    return this.playlistService.getPlaylistsFromData();
  }

  showEditPlaylistsForm(playlist: Playlist) {
    if (!playlist) {
      this.playlistsForm = false;
      return;
    }
    this.editPlaylistsForm = true;
    this.editedPlaylists = playlist;
  }

  showAddPlaylistsForm() {
    
    if (this.playlists.length) {
      this.newPlaylists = {};
    }
    this.playlistsForm = true;
    this.isNewplaylists = true;

  }

  savePlaylists(playlist: Playlist) {
    if (this.isNewplaylists) {
      
      this.playlistService.addPlaylists(playlist);
    }
    this.playlistsForm = false;
  }

  updatePlaylists() {
    this.playlistService.updatePlaylists(this.editedPlaylists);
    this.editPlaylistsForm = false;
    this.editedPlaylists = {};
  }

  removePlaylists(playlist: Playlist) {
    this.playlistService.deletePlaylists(playlist);
  }

  cancelEdits() {
    this.editedPlaylists = {};
    this.editPlaylistsForm = false;
  }

  cancelNewPlaylists() {
    this.newPlaylists = {};
    this.playlistsForm = false;
  }

}
