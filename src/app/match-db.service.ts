// match.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchDbService {
  private readonly localStorageKey = 'savedMatches';

  constructor() { }

  saveMatch(match: any): void {
    const savedMatches = this.getSavedMatches();
    savedMatches.push(match);
    this.updateLocalStorage(savedMatches);
  }

  removeMatch(matchId: string): void {
    const savedMatches = this.getSavedMatches().filter((match: any) => match.id !== matchId);
    this.updateLocalStorage(savedMatches);
  }

  getSavedMatches(): any[] {
    const savedMatchesString = localStorage.getItem(this.localStorageKey);
    return savedMatchesString ? JSON.parse(savedMatchesString) : [];
  }

  private updateLocalStorage(savedMatches: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(savedMatches));
  }

  isMatchFavorite(matchId: string): boolean {
    const savedMatches = this.getSavedMatches();
    return savedMatches.some((match: any) => match.id === matchId);
  }
}
