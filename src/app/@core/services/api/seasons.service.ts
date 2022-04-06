import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IFilter} from 'app/@core/interfaces/IFilter';

@Injectable()
export class SeasonsApiService {
  constructor(private http: HttpClient) {
  }

  public getSeasons(filterOptions: IFilter): Observable<any> {
    return this.http.get<any>(`https://ergast.com/api/f1/seasons.json`, {params: {...filterOptions}});
  }
}
