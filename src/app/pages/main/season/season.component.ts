import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {RouteEnum} from 'app/@core/enums/route.enum';
import {ISchedule} from 'app/@core/interfaces/ISchedule';
import {IPagination} from 'app/@core/interfaces/IPagination';
import {ScheduleApiService} from 'app/@core/services/api/schedule.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html'
})
export class SeasonComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  public filterOptions: IFilter = {
    limit: 15,
    offset: 0
  };
  public year!: number;
  public scheduleData!: ISchedule;
  public totalItems!: number;
  public paginationArray!: IPagination[];
  public routes: typeof RouteEnum = RouteEnum;

  constructor(private activeRoute: ActivatedRoute,
              private scheduleApiService: ScheduleApiService) { }

  ngOnInit(): void {
    this.getInitialData();
    this.getSchedule();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getInitialData(): void {
    this.year = this.activeRoute.snapshot.params['year'];
  }

  public getSchedule(): void {
    this.subscription = this.scheduleApiService.getSchedule(this.year, this.filterOptions).subscribe(data => {
      this.scheduleData = data.MRData;
      this.totalItems = this.scheduleData.total;
    });
  }

  public getLocations(race: any): string {
    return `${race?.Circuit?.Location.lat}, ${race?.Circuit?.Location.long}`;
  }
}
