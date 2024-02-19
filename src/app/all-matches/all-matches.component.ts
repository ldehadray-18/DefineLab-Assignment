import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiMatchesService } from '../api-matches.service';
import { MatchDbService } from '../match-db.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrl: './all-matches.component.css'
})
export class AllMatchesComponent implements OnInit, OnDestroy {
  listVenues: any[] = [];
  DataSubscription: Subscription | undefined;
  collapsed = this.apiMaches.collapsed;
  constructor(private apiMaches: ApiMatchesService, private matchDb: MatchDbService) { }

  ngOnInit(): void {
    this.DataSubscription = this.apiMaches.getAllMatches().subscribe((data: any) => {
      this.listVenues = data.response.venues;
      this.checkSavedMatches();
    })
  }

  toggleSave(venue: any): void {
    if (this.isMatchSaved(venue)) {
      this.matchDb.removeMatch(venue.id);
    } else {
      this.matchDb.saveMatch(venue);
    }
    this.checkSavedMatches();
  }

  private checkSavedMatches(): void {
    this.listVenues.forEach((venue) => {
      venue.isFavorite = this.isMatchSaved(venue);
    });
  }

  private isMatchSaved(venue: any): boolean {
    // Check if the match is in the local database
    // You need to implement this method in your MatchService
    return this.matchDb.isMatchFavorite(venue.id);
  }

  ngOnDestroy(): void {
    this.DataSubscription?.unsubscribe;
  }
}

