import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from 'app/@theme/directives/dropdown.directive';
import {PaginationComponent} from 'app/@theme/components/pagination.component';
import {RoundResultApiService} from 'app/@core/services/api/round-result.service';

@NgModule({
  declarations: [
    DropdownDirective,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    PaginationComponent
  ],
  providers: [
    RoundResultApiService
  ]
})
export class ThemeModule {}
