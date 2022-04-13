import {NgModule} from '@angular/core';

import {ThemeModule} from 'app/@theme/theme.module';
import {MainComponent} from 'app/pages/main/main.component';
import {MainRoutingModule} from 'app/pages/main/main-routing.module';
import {SelectDateModule} from 'app/pages/main/select-date/select-date.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    ThemeModule,
    SelectDateModule,
    MainRoutingModule
  ],
  providers: []
})
export class MainModule {}
