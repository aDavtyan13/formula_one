import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IData} from 'app/@core/interfaces/ISchedule';
import {IFilter} from 'app/@core/interfaces/IFilter';
import {GenerateParamsService} from 'app/@core/services/generate-params.service';

@Injectable()
export class RoundResultApiService {
  constructor(private http: HttpClient,
              private generateParamsService: GenerateParamsService) {
  }

  public getRaceDrivers(year: number, round: number, filterOptions: IFilter): Observable<any> {
    return this.http.get<IData>(`https://ergast.com/api/f1/${year}/${round}/results`,
      this.generateParamsService.generateParams(filterOptions));
  }
}
