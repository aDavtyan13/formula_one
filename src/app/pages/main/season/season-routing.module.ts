import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeasonComponent} from 'app/pages/main/season/season.component';
import {RoundResultComponent} from 'app/pages/main/season/round/round-result.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonComponent
  },
  {
    path: ':round',
    component: RoundResultComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonRoutingModule {}
