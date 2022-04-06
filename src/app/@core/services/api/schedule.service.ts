import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IFilter} from 'app/@core/interfaces/IFilter';

@Injectable()
export class ScheduleApiService {
  constructor(private http: HttpClient) {
  }

  public getSchedule(year: number, filterOptions: IFilter): Observable<any> {
    return this.http.get<any>(`https://ergast.com/api/f1/${year}.json`, {params: {...filterOptions}});
  }
}
