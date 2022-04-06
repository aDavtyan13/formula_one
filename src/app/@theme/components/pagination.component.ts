import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {IPagination} from 'app/@core/interfaces/IPagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() pages!: IPagination[];
  @Input() filterOptions!: IFilter;

  @Output() updatedFilterOptionsEmit: EventEmitter<void> = new EventEmitter<void>();

  public changePage(pageNumber: number): void {
    this.filterOptions.offset = (pageNumber - 1) * this.filterOptions.limit;
    this.updatedFilterOptionsEmit.emit();
  }
}
