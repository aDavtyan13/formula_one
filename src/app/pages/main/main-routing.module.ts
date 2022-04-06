import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RouteEnum} from 'app/@core/enums/route.enum';
import {MainComponent} from 'app/pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
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
