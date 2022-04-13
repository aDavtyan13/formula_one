import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IData} from 'app/@core/interfaces/ISchedule';
import {IFilter} from 'app/@core/interfaces/IFilter';
import {GenerateParamsService} from 'app/@core/services/generate-params.service';

@Injectable()
export class SeasonsApiService {
  constructor(private http: HttpClient,
              private generateParamsService: GenerateParamsService) {
  }

  public getSeasons(filterOptions: IFilter): Observable<any> {
    return this.http.get<IData>(`https://ergast.com/api/f1/seasons`,
      this.generateParamsService.generateParams(filterOptions));
  }
}
