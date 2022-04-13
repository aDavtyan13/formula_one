import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {RouteEnum} from 'app/@core/enums/route.enum';

export abstract class TableDataModel {
  protected constructor(public activeRoute: ActivatedRoute) {
  }

  public data!: any;
  public year!: number;
  public round!: number;
  public totalItems!: number;
  public isLoading: boolean = false;
  public routes: typeof RouteEnum = RouteEnum;
  public subscription!: Subscription;
  public filterOptions: IFilter = {
    limit: 10,
    offset: 0
  };

  abstract getData(): void;
  abstract getInitialData(): void;
}
