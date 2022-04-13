import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {ISchedule} from 'app/@core/interfaces/ISchedule';
import {TableDataModel} from 'app/@core/models/table-data.model';
import {RoundResultApiService} from 'app/@core/services/api/round-result.service';

@Component({
  selector: 'app-season',
  templateUrl: './round-result.component.html'
})
export class RoundResultComponent extends TableDataModel implements OnInit, OnDestroy {
  private roundResultsData!: ISchedule;

  constructor(activeRoute: ActivatedRoute,
              private roundResultApiService: RoundResultApiService) {
    super(activeRoute);
  }

  ngOnInit(): void {
    this.getInitialData();
    this.getData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setResults(): void {
    this.data = this.roundResultsData?.RaceTable?.Races.shift()?.Results;
  }

  public getInitialData(): void {
    this.year = this.activeRoute.snapshot.params['year'];
    this.round = this.activeRoute.snapshot.params['round'];
  }

  public getData(): void {
    this.isLoading = true;
    this.subscription = this.roundResultApiService.getRaceDrivers(this.year, this.round, this.filterOptions).subscribe(data => {
      this.roundResultsData = data.MRData;
      this.totalItems = this.roundResultsData.total;
      this.setResults();
      this.isLoading = false;
    });
  }
}
