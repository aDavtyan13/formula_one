import {NgModule} from '@angular/core';

import {ThemeModule} from 'app/@theme/theme.module';
import {SeasonComponent} from 'app/pages/main/season/season.component';
import {ScheduleApiService} from 'app/@core/services/api/schedule.service';
import {SeasonRoutingModule} from 'app/pages/main/season/season-routing.module';
import {RoundResultComponent} from 'app/pages/main/season/round/round-result.component';

@NgModule({
  declarations: [
    RoundResultComponent,
    SeasonComponent
  ],
  imports: [
    ThemeModule,
    SeasonRoutingModule
  ],
  providers: [
    ScheduleApiService
  ]
})
export class SeasonModule {}
