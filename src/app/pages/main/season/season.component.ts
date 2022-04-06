import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {RouteEnum} from 'app/@core/enums/route.enum';
import {ISchedule} from 'app/@core/interfaces/ISchedule';
import {IPagination} from 'app/@core/interfaces/IPagination';
import {ScheduleApiService} from 'app/@core/services/api/schedule.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html'
})
export class SeasonComponent implements OnInit {
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

  private getInitialData(): void {
    this.year = this.activeRoute.snapshot.params['year'];
  }

  private getPaginationInfo(): void {
    const pageCount: number = Math.ceil(this.scheduleData?.total / this.filterOptions.limit);
    this.paginationArray = Array(pageCount).fill(0).map((x, i) => ({ number: (i + 1)}));
  }

  public getSchedule(): void {
    this.scheduleApiService.getSchedule(this.year, this.filterOptions).subscribe(data => {
      this.scheduleData = data.MRData;
      this.totalItems = this.scheduleData.total;
      this.getPaginationInfo();
    });
  }

  public getLocations(race: any): string {
    return `${race?.Circuit?.Location.lat}, ${race?.Circuit?.Location.long}`;
  }
}
