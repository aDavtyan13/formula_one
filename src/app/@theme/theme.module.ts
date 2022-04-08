import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from 'app/@theme/directives/dropdown.directive';
import {RoundResultApiService} from 'app/@core/services/api/round-result.service';
import {PaginationComponent} from 'app/@theme/components/pagination/pagination.component';

export const COMPONENTS = [
  PaginationComponent
];

export const DIRECTIVES = [
  DropdownDirective
];

export const MODULES = [
  CommonModule
];

export const SERVICES = [
  RoundResultApiService
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ]
})
export class ThemeModule {}
