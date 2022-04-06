import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core'
  ;
import {IFilter} from 'app/@core/interfaces/IFilter';
import {RouteEnum} from 'app/@core/enums/route.enum';
import {IPagination} from 'app/@core/interfaces/IPagination';
import {IRace, ISchedule} from 'app/@core/interfaces/ISchedule';
import {RoundResultApiService} from 'app/@core/services/api/round-result.service';

@Component({
  selector: 'app-season',
  templateUrl: './round-result.component.html'
})
export class RoundResultComponent implements OnInit {
  private roundResultsData!: ISchedule;

  public year!: number;
  public round!: number;
  public results?: IRace[];
  public totalItems!: number;
  public paginationArray!: IPagination[];
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

  private getInitialData(): void {
    this.year = this.activeRoute.snapshot.params['year'];
    this.round = this.activeRoute.snapshot.params['round'];
  }

  private getPaginationInfo(): void {
    const pageCount: number = Math.ceil(this.roundResultsData?.total / this.filterOptions.limit);
    this.paginationArray = Array(pageCount).fill(0).map((x, i) => ({number: (i + 1)}));
  }

  private setResults(): void {
    this.results = this.roundResultsData?.RaceTable?.Races.shift()?.Results;
  }

  public getRoundData(): void {
    this.roundResultApiService.getRaceDrivers(this.year, this.round, this.filterOptions).subscribe(data => {
      this.roundResultsData = data.MRData;
      this.totalItems = this.roundResultsData.total;
      this.setResults();
      this.getPaginationInfo();
    });
  }
}
