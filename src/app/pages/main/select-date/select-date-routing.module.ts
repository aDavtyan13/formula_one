import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SelectDateComponent} from 'app/pages/main/select-date/select-date.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectDateRoutingModule {}
