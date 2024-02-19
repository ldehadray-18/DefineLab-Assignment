import { Component, OnInit } from '@angular/core';
import { MatchDbService } from '../match-db.service';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrl: './saved-matches.component.css'
})
export class SavedMatchesComponent implements OnInit {
  listVenues: any[] = [];

  constructor(private matchDb: MatchDbService) {

  }

  ngOnInit(): void {
    // Fetch saved matches from local storage
    this.listVenues = this.matchDb.getSavedMatches();
  }

  removeMatch(venue: any): void {

    this.matchDb.removeMatch(venue.id);

    // Update the list of saved matches
    this.listVenues = this.matchDb.getSavedMatches();
  }
}
