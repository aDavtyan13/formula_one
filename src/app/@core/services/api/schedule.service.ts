import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IData} from 'app/@core/interfaces/ISchedule';
import {IFilter} from 'app/@core/interfaces/IFilter';

@Injectable()
export class ScheduleApiService {
  constructor(private http: HttpClient) {
  }

  public getSchedule(year: number, filterOptions: IFilter): Observable<IData> {
    return this.http.get<IData>(`https://ergast.com/api/f1/${year}.json`, {params: {...filterOptions}});
  }
}
