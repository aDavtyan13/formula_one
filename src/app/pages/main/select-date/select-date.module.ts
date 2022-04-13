import {NgModule} from '@angular/core';

import {ThemeModule} from 'app/@theme/theme.module';
import {SeasonsApiService} from 'app/@core/services/api/seasons.service';
import {SelectDateComponent} from 'app/pages/main/select-date/select-date.component';
import {SelectDateRoutingModule} from 'app/pages/main/select-date/select-date-routing.module';

@NgModule({
  declarations: [
    SelectDateComponent
  ],
  imports: [
    ThemeModule,
    SelectDateRoutingModule
  ],
  providers: [
    SeasonsApiService
  ]
})
export class SelectDateModule {}
