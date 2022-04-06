import {NgModule} from '@angular/core';

import {ThemeModule} from 'app/@theme/theme.module';
import {MainComponent} from 'app/pages/main/main.component';
import {MainRoutingModule} from 'app/pages/main/main-routing.module';
import {SeasonsApiService} from 'app/@core/services/api/seasons.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    ThemeModule,
    MainRoutingModule
  ],
  providers: [
    SeasonsApiService
  ]
})
export class MainModule {

}
