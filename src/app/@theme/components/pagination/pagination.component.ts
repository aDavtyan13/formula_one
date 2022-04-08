import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';
import {IPagination} from 'app/@core/interfaces/IPagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() pagesCount!: number;
  @Input() filterOptions!: IFilter;

  @Output() updatedFilterOptionsEmit: EventEmitter<void> = new EventEmitter<void>();

  public pages!: IPagination[];

  ngOnInit() {
    this.initializePages();
  }

  private initializePages(): void {
    const pageCount: number = Math.ceil(this.pagesCount / this.filterOptions.limit);
    this.pages = Array(pageCount).fill(0).map((x, i) => ({ number: (i + 1)}));
  }

  public changePage(pageNumber: number): void {
    this.filterOptions.offset = (pageNumber - 1) * this.filterOptions.limit;
    this.updatedFilterOptionsEmit.emit();
  }
}
