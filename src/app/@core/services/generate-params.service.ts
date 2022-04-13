import {Injectable} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';

@Injectable({
  providedIn: 'root'
})
export class GenerateParamsService {
  public generateParams(filterOptions: IFilter): any {
    return {params: {...filterOptions}};
  }
}
