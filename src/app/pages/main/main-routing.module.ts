import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RouteEnum} from 'app/@core/enums/route.enum';
import {SelectDateComponent} from 'app/pages/main/select-date/select-date.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDateComponent
  },
  {
    path: `${RouteEnum.SEASON}/:year`,
    loadChildren: () => import('./season/season.module').then(m => m.SeasonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
