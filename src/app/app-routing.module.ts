import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompComponent } from './components/observable/all-comp/all-comp.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PromisesComponent } from './components/promises/promises.component';

const routes: Routes = [
  {path: 'promises', component: PromisesComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path:'', component: AllCompComponent},
    {path:'fromEvent', component: FromEventComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
