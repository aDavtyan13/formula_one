import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IFilter} from 'app/@core/interfaces/IFilter';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() pagesCount!: number;
  @Input() filterOptions!: IFilter;

  @Output() updatedFilterOptionsEmit: EventEmitter<void> = new EventEmitter<void>();

  public pagesIndexes: number[] = [];

  ngOnInit() {
    this.initializePages();
  }

  private initializePages(): void {
    const pageCount: number = Math.ceil(this.pagesCount / this.filterOptions.limit);
    for (let i = 0; i < pageCount; i++) {
      this.pagesIndexes.push(i + 1);
    }
  }

  public changePage(pageNumber: number): void {
    this.filterOptions.offset = (pageNumber - 1) * this.filterOptions.limit;
    this.updatedFilterOptionsEmit.emit();
  }
}
