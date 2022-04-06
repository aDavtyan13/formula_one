import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IFilter} from 'app/@core/interfaces/IFilter';

@Injectable()
export class RoundResultApiService {
  constructor(private http: HttpClient) {
  }

  public getRaceDrivers(year: number, round: number, filterOptions: IFilter): Observable<any> {
    return this.http.get<any>(`https://ergast.com/api/f1/${year}/${round}/results.json`, {params: {...filterOptions}})
  }
}
