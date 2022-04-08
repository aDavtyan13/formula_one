import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core'
  ;
import {IFilter} from 'app/@core/interfaces/IFilter';
import {RouteEnum} from 'app/@core/enums/route.enum';
import {IRace, ISchedule} from 'app/@core/interfaces/ISchedule';
import {RoundResultApiService} from 'app/@core/services/api/round-result.service';

@Component({
  selector: 'app-season',
  templateUrl: './round-result.component.html'
})
export class RoundResultComponent implements OnInit, OnDestroy {
  private roundResultsData!: ISchedule;
  private subscription!: Subscription;

  public year!: number;
  public round!: number;
  public results?: IRace[];
  public totalItems!: number;
  public routes: typeof RouteEnum = RouteEnum;
  public filterOptions: IFilter = {
    limit: 10,
    offset: 0
  };

  constructor(private activeRoute: ActivatedRoute,
              private roundResultApiService: RoundResultApiService) {
  }

  ngOnInit(): void {
    this.getInitialData();
    this.getRoundData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getInitialData(): void {
    this.year = this.activeRoute.snapshot.params['year'];
    this.round = this.activeRoute.snapshot.params['round'];
  }

  private setResults(): void {
    this.results = this.roundResultsData?.RaceTable?.Races.shift()?.Results;
  }

  public getRoundData(): void {
    this.subscription = this.roundResultApiService.getRaceDrivers(this.year, this.round, this.filterOptions).subscribe(data => {
      this.roundResultsData = data.MRData;
      this.totalItems = this.roundResultsData.total;
      this.setResults();
    });
  }
}
