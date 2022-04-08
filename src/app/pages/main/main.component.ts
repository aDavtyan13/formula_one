import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {ISeason} from 'app/@core/interfaces/ISeason';
import {RouteEnum} from 'app/@core/enums/route.enum';
import {SeasonsApiService} from 'app/@core/services/api/seasons.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private filterOptions: IFilter = {
    limit: 10,
    offset: 0
  };

  public isInMainPage: boolean = true;
  public seasons!: ISeason[];
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
    this.subscription = this.seasonsApiService.getSeasons(this.filterOptions).subscribe(data => {
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
    this.isInMainPage = false;

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
