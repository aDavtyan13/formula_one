import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {IRaces} from 'app/@core/interfaces/ISchedule';
import {TableDataModel} from 'app/@core/models/table-data.model';
import {ScheduleApiService} from 'app/@core/services/api/schedule.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html'
})
export class SeasonComponent extends TableDataModel implements OnInit, OnDestroy {
  constructor(activeRoute: ActivatedRoute,
              private scheduleApiService: ScheduleApiService) {
    super(activeRoute);
  }

  ngOnInit(): void {
    this.getInitialData();
    this.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public getInitialData(): void {
    this.year = this.activeRoute.snapshot.params['year'];
  }

  public getData(): void {
    this.isLoading = true;
    this.subscription = this.scheduleApiService.getSchedule(this.year, this.filterOptions).subscribe(data => {
      this.data = data.MRData;
      this.totalItems = this.data.total;
      this.isLoading = false;
    });
  }

  public getLocations(race: IRaces): string {
    return `${race?.Circuit?.Location.lat}, ${race?.Circuit?.Location.long}`;
  }
}
