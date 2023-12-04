import {Component, OnInit} from '@angular/core';
import {LoaderStateService} from "@services/loader-state.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss']
})
export class ViewWrapperComponent implements OnInit {

  public isLoading: boolean = false;

  public constructor(
    public loaderStateService: LoaderStateService
  ) {
  }

  public ngOnInit(): void {
    this.loaderStateService
      .loaderStateListener
      .pipe(
        delay(0)
      )
      .subscribe({
        next: (state: boolean) => {
          this.isLoading = state;
        }
      });
  }
}
