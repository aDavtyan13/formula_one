import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {RouteEnum} from 'app/@core/enums/route.enum';
import {ISeason} from 'app/@core/interfaces/ISchedule';
import {SeasonsApiService} from 'app/@core/services/api/seasons.service';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html'
})
export class SelectDateComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private filterOptions: IFilter = {
    limit: 10,
    offset: 0
  };

  public seasons!: ISeason[];
  public isLoading: boolean = false;
  public isLoadMoreAvailable: boolean = true;

  constructor(private route: Router,
              private seasonsApiService: SeasonsApiService) {
  }

  ngOnInit() {
    this.getYears();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getYears(): void {
    this.isLoading = true;
    this.subscription = this.seasonsApiService.getSeasons(this.filterOptions).subscribe(data => {
      this.isLoading = false;
      if (this.seasons) {
        this.seasons.push(...data.MRData.SeasonTable.Seasons);

        if (this.filterOptions.offset + this.filterOptions.limit > this.seasons.length) {
          this.isLoadMoreAvailable = false;
        }
      } else {
        this.seasons = data.MRData.SeasonTable.Seasons;
      }
    });
  }

  public selectYear(year?: number): void {
    if (!year) {
      this.route.navigate([`/${RouteEnum.SEASON}`, new Date().getFullYear()]);
    } else {
      this.route.navigate([`/${RouteEnum.SEASON}`, year]);
    }
  }

  public loadMoreYears(): void {
    this.filterOptions.offset += 10;
    this.getYears();
  }
}
