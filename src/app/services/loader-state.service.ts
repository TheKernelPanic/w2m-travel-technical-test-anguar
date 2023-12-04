import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderStateService {

  public loaderMapState: Map<string, boolean> = new Map();
  public loaderStateListener: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public setLoaderState(state: boolean, url: string): void {
    if (!url) {
      return;
    }
    if (state) {
      this.loaderMapState.set(url, state);
      this.loaderStateListener.next(true);
    }
    if (!state && this.loaderMapState.has(url)) {
      this.loaderMapState.delete(url);
    }
    if (this.loaderMapState.size === 0) {
      this.loaderStateListener.next(false);
    }
  }
}
